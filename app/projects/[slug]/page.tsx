import { Metadata } from "next";
import { notFound } from "next/navigation";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constants/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";
import { getProjectsDataBySlug } from "@/services/projects";

// 1. Perbarui Props untuk menerima 'locale'
interface ProjectDetailPageProps {
  params: { slug: string; locale: string };
}

// Fungsi untuk mengambil detail proyek dengan bahasa
const getProjectDetail = async (
  slug: string,
  locale: string,
): Promise<ProjectItem> => {
  // 2. Teruskan 'locale' saat memanggil service
  const projectData = await getProjectsDataBySlug(slug, locale);

  if (!projectData) {
    notFound();
  }

  // Logika untuk menggabungkan dengan konten MDX tetap sama
  const contents = loadMdxFiles();
  const content = contents.find((item) => item.slug === slug);
  const response = { ...projectData, content: content?.content };
  
  // Menghindari error serialisasi Next.js
  const data = JSON.parse(JSON.stringify(response));
  return data;
};

export const generateMetadata = async ({
  params,
}: ProjectDetailPageProps): Promise<Metadata> => {
  const project = await getProjectDetail(params.slug, params.locale);

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      // 3. Perbaiki nama properti dari 'image' menjadi 'image_url'
      images: project.image_url || '',
      url: `${METADATA.openGraph.url}/projects/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`,
    },
  };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const data = await getProjectDetail(params.slug, params.locale);

  const PAGE_TITLE = data?.title;
  // === UBAH BARIS INI ===
  const PAGE_DESCRIPTION = data?.description ?? undefined;

  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...data} />
    </Container>
  );
};

export default ProjectDetailPage;