"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

import ProjectSkeleton from "./ProjectSkeleton";
import ProjectCard from "./ProjectCard";
import EmptyState from "@/common/components/elements/EmptyState";
import { fetcher } from "@/services/fetcher";
import { ProjectItem } from "@/common/types/projects";

const Projects = () => {
  const locale = useLocale();
  const { data, isLoading, error } = useSWR(`/api/projects?lang=${locale}`, fetcher);
  const t = useTranslations("ProjectsPage");

  const filteredProjects: ProjectItem[] = data
    ?.filter((item: ProjectItem) => item)
    .sort((a: ProjectItem, b: ProjectItem) => {
      if (a.is_featured && !b.is_featured) return -1;
      if (!a.is_featured && b.is_featured) return 1;
      return a.title.localeCompare(b.title);
    });

  if (error) return <EmptyState message={t("error")} />;
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[...Array(4)].map((_, i) => <ProjectSkeleton key={i} />)}
      </div>
    );
  }
  if (!filteredProjects || filteredProjects.length === 0) {
    return <EmptyState message={t("no_data")} />;
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {filteredProjects?.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;