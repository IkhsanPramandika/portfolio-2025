export const UMAMI_ACCOUNT = {
  username: "Muhammad Ikhsan Pramandika", // <-- Ganti dengan nama Anda
  api_key: process.env.UMAMI_API_KEY, // Biarkan, ini mengambil dari .env
  base_url: "https://api.umami.is/v1/websites",
  endpoint: {
    page_views: "/pageviews",
    sessions: "/sessions/stats",
  },
  parameters: {
    startAt: 1735664400000, // Contoh: 1 Januari 2025
    endAt: new Date().getTime(), // Mengambil data sampai waktu sekarang
    unit: "month",
    timezone: "Asia/Jakarta",
  },
  is_active: true,
  websites: [
    // Karena Anda hanya punya 1 website, kita buat 1 objek saja
    {
      domain: "ikhsan-pramandika.vercel.app", // <-- Ganti dengan domain Anda
      website_id: process.env.UMAMI_WEBSITE_ID_SITE, // Biarkan, ini mengambil dari .env
      umami_url:
        "https://cloud.umami.is/share/3oaceF4faLcVz0DI/ikhsan-pramandika.vercel.app", // <-- Ganti dengan URL share dari Umami
    },
  ],
};
