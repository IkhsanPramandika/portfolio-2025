import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsBehance as BehanceIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { SocialMediaProps } from "../types/socialMedia";

const iconSize = 35;
const backgroundIconSize = 275;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "Stay in Touch",
    description: "Reach out via email for any inquiries or collaborations.",
    name: "gmail",
    href: "mailto:mikhsanpra26@gmail.com",
    icon: <SiGmail size={iconSize} />,
    backgroundIcon: <SiGmail size={backgroundIconSize} />,
    textColor: "text-red-300",
    backgroundColor: "bg-red-300",
    borderColor: "border-red-300",
    backgroundGradientColor: "bg-gradient-to-b from-red-700 to-red-900",
    colSpan: "md:col-span-2",
    isShow: true,
  },
  {
    title: "Follow My Journey",
    description: "Stay updated with my latest posts and stories on Instagram.",
    name: "instagram",
    href: "https://www.instagram.com/canpraa?igsh=cHZ2cXhwbm10MXV0&utm_source=qr",
    icon: <InstagramIcon size={iconSize} />,
    backgroundIcon: <InstagramIcon size={backgroundIconSize} />,
    textColor: "text-purple-200",
    backgroundColor: "bg-purple-200",
    borderColor: "border-purple-200",
    backgroundGradientColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
    isShow: true,
  },
  {
    title: "Let's Connect",
    description:
      "Connect for collaboration or explore my professional experience.",
    name: "linkedin",
    href: "https://www.linkedin.com/in/muhammad-ikhsan-pramandika/",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundIcon: <LinkedinIcon size={backgroundIconSize} />,
    textColor: "text-sky-300",
    backgroundColor: "bg-sky-300",
    borderColor: "border-sky-300",
    backgroundGradientColor: "bg-gradient-to-b from-sky-700 to-sky-900",
    isShow: true,
  },
  {
    title: "View My Portfolio",
    description:
      "Explore my creative projects and design portfolio on Behance.",
    name: "behance",
    href: "https://www.behance.net/ikhsanpramand",
    icon: <BehanceIcon size={iconSize} />,
    backgroundIcon: <BehanceIcon size={backgroundIconSize} />,
    textColor: "text-indigo-400",
    backgroundColor: "bg-indigo-500",
    borderColor: "border-indigo-500",
    backgroundGradientColor: "bg-gradient-to-b from-indigo-500 to-indigo-700",
    isShow: true,
  },
  {
    title: "Explore the Code",
    description: "Explore the source code for all my projects on GitHub.",
    name: "github",
    href: "https://github.com/IkhsanPramandika",
    icon: <GithubIcon size={iconSize} />,
    backgroundIcon: <GithubIcon size={backgroundIconSize} />,
    textColor: "text-slate-400",
    backgroundColor: "bg-slate-400",
    borderColor: "border-slate-400",
    backgroundGradientColor: "bg-gradient-to-b from-slate-900 to-slate-950",
    isShow: true,
  },
];
