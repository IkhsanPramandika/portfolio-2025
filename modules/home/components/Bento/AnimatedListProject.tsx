"use client";

import { useLocale } from "next-intl";
import useSWR from "swr";

import AnimatedList from "@/common/components/elements/AnimatedList";
import { ProjectItem } from "@/common/types/projects";
import { fetcher } from "@/services/fetcher";

const AnimatedListProject = () => {
  // 1. Ambil bahasa yang aktif
  const locale = useLocale(); 
  
  // 2. Minta data ke API sesuai bahasa
  const { data } = useSWR(`/api/projects?lang=${locale}`, fetcher);

  // Proses data setelah diterima
  const projects =
    data
      // 3. Hapus filter is_show
      ?.sort((a: ProjectItem, b: ProjectItem) => {
        // 4. Perbaiki logika sortir, urutkan berdasarkan judul
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        return a.title.localeCompare(b.title);
      })
      .map((item: ProjectItem) => ({
        // 5. Perbaiki nama properti image -> image_url
        image: item.image_url || "/images/projects/placeholder.jpg", 
        href: `/projects/${item.slug}`,
      })) ?? [];

  return (
    <AnimatedList
      items={projects} // Cukup gunakan variabel projects yang sudah diproses
      itemImage={true}
      showGradients={false}
      displayScrollbar={false}
    />
  );
};

export default AnimatedListProject;