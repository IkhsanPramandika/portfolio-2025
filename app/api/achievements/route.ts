import { type NextRequest, NextResponse } from "next/server";
import { getAchievementsData } from "@/services/achievements";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;

    // Ambil semua parameter dan langsung ubah 'null' menjadi 'undefined'
    const queryCategory = searchParams.get("category") ?? undefined;
    const querySearch = searchParams.get("search") ?? undefined;
    const queryLang = searchParams.get("lang") || "en";

    console.log("API Route Menerima Kategori:", queryCategory);

    const data = await getAchievementsData({
      category: queryCategory,
      search: querySearch,
      lang: queryLang,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API Achievements Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
