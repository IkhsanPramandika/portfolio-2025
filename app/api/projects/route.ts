import { type NextRequest, NextResponse } from "next/server";

import { getProjectsData } from "@/services/projects"; // Mengimpor fungsi yang sudah benar

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const queryLang = searchParams.get("lang") || 'id'; // Default ke bahasa Indonesia

    // Memanggil service function dengan filter bahasa
    const data = await getProjectsData({
      lang: queryLang,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API Projects Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};