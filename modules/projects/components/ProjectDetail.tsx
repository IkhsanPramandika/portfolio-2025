import { useTranslations } from "next-intl";

import Tooltip from "@/common/components/elements/Tooltip";
import Image from "@/common/components/elements/Image";
import MDXComponent from "@/common/components/elements/MDXComponent";
import { ProjectItem } from "@/common/types/projects";
import { STACKS } from "@/common/constants/stacks";
import ProjectLink from "./ProjectLink";

const ProjectDetail = ({
  title,
  image_url,
  stacks,
  live_url,
  github_url,
  content,
}: ProjectItem) => {
  const t = useTranslations("ProjectsPage");

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row lg:flex-row lg:items-start">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mb-1 text-sm text-neutral-700 dark:text-neutral-300">
            {t("tech_stack")} :{" "}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {stacks?.map((stack: string, index: number) => {
              const stackData = STACKS[stack];
              if (!stackData) return null;
              return (
                <Tooltip title={stack} key={index}>
                  <div className={`${stackData.color}`}>{stackData.icon}</div>
                </Tooltip>
              );
            })}
          </div>
        </div>
        <ProjectLink
          title={title}
          live_url={live_url || ""}
          github_url={github_url || ""}
        />
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image_url || "/images/projects/placeholder.jpg"}
          alt={title}
          width={1000}
          height={400}
          className="transition duration-500 hover:scale-[1.04]"
        />
      </div>
      {content && (
        <div className="prose prose-invert mt-5 max-w-none leading-[1.8] dark:text-neutral-300">
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;