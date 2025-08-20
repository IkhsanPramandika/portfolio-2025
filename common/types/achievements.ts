export type AchievementItem = {
  id: string;
  title: string;
  description?: string | null;
  category?: string | null;
  date: string;
  image_url?: string | null;
  certificate_url?: string | null;
};