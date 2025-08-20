import { createClient } from "@/common/utils/server";
import { ProjectItem } from "@/common/types/projects";

// Helper function untuk meratakan data
const flattenProjectData = (data: any[]): ProjectItem[] => {
  return data.map((item) => ({
    id: item.id,
    image_url: item.image_url,
    live_url: item.live_url,
    github_url: item.github_url,
    stacks: item.stacks,
    is_featured: item.is_featured,
    title: item.project_translations[0]?.title,
    slug: item.project_translations[0]?.slug,
    description: item.project_translations[0]?.description,
    content: item.project_translations[0]?.content,
  }));
};

interface ProjectDataProps {
  lang?: string;
  is_featured?: boolean;
}

// Fungsi baru untuk mengambil semua proyek
export const getProjectsData = async ({ lang = 'id', is_featured }: ProjectDataProps) => {
  const supabase = createClient();

  let query = supabase
    .from("projects")
    .select(
      `
      id,
      image_url,
      live_url,
      github_url,
      stacks,
      is_featured,
      project_translations!inner (
        title,
        slug,
        description,
        content
      )
    `
    )
    .eq("project_translations.language_code", lang)
    .order('created_at', { ascending: false });

  if (is_featured) {
    query = query.eq('is_featured', true);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase fetch error:", error.message);
    throw new Error(error.message);
  }

  return flattenProjectData(data);
};
export const getProjectsDataBySlug = async (slug: string, lang = 'id') => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("project_translations") 
    .select(
      `
      title,
      slug,
      description,
      content,
      projects (
        id,
        image_url,
        live_url,
        github_url,
        stacks,
        is_featured
      )
    `
    )
    .eq("language_code", lang)
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Supabase fetch error:", error.message);
    return null;
  }
  if (!data || !data.projects) return null;

  // === PERBAIKAN DI SINI ===
  const project = Array.isArray(data.projects) ? data.projects[0] : data.projects;

  const flattenedData = {
    id: project?.id,
    image_url: project?.image_url,
    live_url: project?.live_url,
    github_url: project?.github_url,
    stacks: project?.stacks,
    is_featured: project?.is_featured,
    title: data.title,
    slug: data.slug,
    description: data.description,
    content: data.content,
  };
  // === SELESAI ===

  return flattenedData as ProjectItem;
};