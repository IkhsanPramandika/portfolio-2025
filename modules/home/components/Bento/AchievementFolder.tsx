"use client";

import useSWR from "swr";

import Folder from "@/common/components/elements/Folder";
import Image from "@/common/components/elements/Image";
import { fetcher } from "@/services/fetcher";

// Tipe ini mungkin perlu disesuaikan agar cocok 100% dengan kolom Supabase Anda
interface SupabaseAchievementItem {
  id: string;
  name: string;
  image_url: string;
  certificate_url?: string;
  created_at: string;
}

const AchievementFolder = () => {
  const { data, error } = useSWR<SupabaseAchievementItem[]>("/api/achievements", fetcher);

  // Tambahkan kondisi loading dan error untuk pengalaman pengguna yang lebih baik
  if (error) return <div>Gagal memuat data</div>;
  if (!data) return <div>Memuat...</div>;

  const filteredAchievements = data
    // Filter item yang memiliki URL sertifikat dan is_show true
    ?.filter((item) => item.image_url)
    // Urutkan berdasarkan tanggal dibuat (terbaru lebih dulu)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    // Ambil 3 item teratas
    .slice(0, 3);

  const items =
    filteredAchievements?.map((item) => (
      <Image
        key={item.id}
        // Gunakan certificate_url sebagai sumber gambar
        src={item.image_url!}
        alt={item.name}
        width={200}
        height={100}
        className="h-full w-full rounded-md object-cover"
      />
    )) ?? [];

  return (
    <div className="mb-4 mt-8 flex w-full items-center justify-center">
      <Folder
        size={0.8}
        color="#facc15"
        items={items}
      />
    </div>
  );
};

export default AchievementFolder;