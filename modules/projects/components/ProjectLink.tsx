import { useTranslations } from "next-intl";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FiExternalLink as LinkIcon } from "react-icons/fi";

interface ProjectLinkProps {
  title?: string;
  github_url?: string;
  live_url?: string;
}

interface LinkComponentProps {
  url: string;
  text: string;
  icon: JSX.Element;
}

const LinkComponent = ({ url, text, icon }: LinkComponentProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300">
        <i>{icon}</i>
        <p className="text-sm transition-all duration-300 hover:text-teal-400 dark:text-teal-500">
          {text}
        </p>
      </div>
    </a>
  );
};

const ProjectLink = ({ title, github_url, live_url }: ProjectLinkProps) => {
  const t = useTranslations("ProjectsPage");

  return (
    <div className="flex flex-wrap gap-4">
      {github_url && (
        <LinkComponent
          url={github_url}
          text={t("source_code_text")}
          icon={<GithubIcon size={22} />}
        />
      )}
      {github_url && live_url && (
        <span className="text-neutral-400 dark:text-neutral-600">|</span>
      )}
      {live_url && (
        <LinkComponent
          url={live_url}
          text={t("live_demo_text")}
          icon={<LinkIcon size={22} />}
        />
      )}
    </div>
  );
};

export default ProjectLink;