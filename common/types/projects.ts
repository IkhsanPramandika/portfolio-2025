export type ProjectItem = {
  id: string; // UUID sekarang adalah string
  image_url?: string | null;
  live_url?: string | null;
  github_url?: string | null;
  stacks?: string[];
  is_featured?: boolean;
  title: string;
  slug: string;
  description?: string | null;
  content?: string | null;
};

export type ProjectItemProps = {
  projects: ProjectItem[];
};