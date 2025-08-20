import { createClient } from "@/common/utils/server";

// 1. Perbarui Props untuk menerima 'lang'
interface GetAchievementsDataProps {
  category?: string | null;
  search?: string | null;
  lang?: string;
}

export const getAchievementsData = async ({
  category,
  search,
  lang = "id", // Default ke bahasa Indonesia jika tidak ada
}: GetAchievementsDataProps) => {
  console.log("Service Menerima Kategori:", category);
  const supabase = createClient();

  // 2. Ubah Query untuk menggabungkan (JOIN) dua tabel
  let query = supabase
    .from("achievements")
    .select(
      `
      id,
      date,
      image_url,
      certificate_url,
      achievement_translations!inner (
        title,
        description,
        category
      )
    `,
    )
    // Filter berdasarkan bahasa yang dipilih
    .eq("achievement_translations.language_code", lang);

  // 3. Perbaiki filter agar mencari di tabel terjemahan
  if (category) {
    query = query.ilike("achievement_translations.category", category);
  }

  if (search) {
    query = query.ilike("achievement_translations.title", `%${search}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase fetch error:", error.message);
    throw new Error(error.message);
  }

  // 4. Ratakan struktur data agar mudah digunakan di frontend
  const flattenedData = data.map((item) => ({
    id: item.id,
    date: item.date,
    image_url: item.image_url,
    certificate_url: item.certificate_url,
    title: item.achievement_translations[0]?.title,
    description: item.achievement_translations[0]?.description,
    category: item.achievement_translations[0]?.category,
  }));

  return flattenedData;
};
