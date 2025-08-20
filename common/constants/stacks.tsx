import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaMicrosoft } from "react-icons/fa6";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiNextdotjs,
  SiLaravel,
  SiPhp,
  SiFirebase,
  SiMysql,
  SiSupabase,
  SiPython,
  SiFigma,
  SiCanva,
  SiJira,
  SiTrello,
  SiPostman,
  SiTableau,
  SiSharp,
  SiDotnet,
  SiKotlin,
  SiAndroidstudio,
  SiOdoo,
  SiTypescript,
  SiBun,
  SiTailwindcss,
} from "react-icons/si";

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    color: string;
    background: string;
    isActive?: boolean;
  };
};

const iconSize = 24;

export const STACKS: SkillProps = {
  // --- Skill Utama untuk Tampil di Halaman Depan ---
  "Next.js": {
    icon: <SiNextdotjs size={iconSize} />,
    color: "text-neutral-50",
    background: "bg-neutral-800",
    isActive: true,
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    color: "text-blue-500",
    background: "bg-blue-500",
    isActive: true,
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    color: "text-red-500",
    background: "bg-red-500",
    isActive: true,
  },
  PHP: {
    icon: <SiPhp size={iconSize} />,
    color: "text-indigo-500",
    background: "bg-indigo-500",
    isActive: true,
  },
  Kotlin: {
    icon: <SiKotlin size={iconSize} />,
    color: "text-purple-600",
    background: "bg-purple-600",
    isActive: true,
  },
  "Android Studio": {
    icon: <SiAndroidstudio size={iconSize} />,
    color: "text-green-500",
    background: "bg-green-500",
    isActive: true,
  },
  Python: {
    icon: <SiPython size={iconSize} />,
    color: "text-yellow-400",
    background: "bg-yellow-400",
    isActive: true,
  },
  Figma: {
    icon: <SiFigma size={iconSize} />,
    color: "text-pink-500",
    background: "bg-pink-500",
    isActive: true,
  },
  Tableau: {
    icon: <SiTableau size={iconSize} />,
    color: "text-blue-600",
    background: "bg-blue-600",
    isActive: true,
  },
  MySql: {
    icon: <SiMysql size={iconSize} />,
    color: "text-cyan-700",
    background: "bg-cyan-700",
    isActive: true,
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    color: "text-emerald-500",
    background: "bg-emerald-500",
    isActive: true,
  },
  "C#": {
    icon: <SiSharp size={iconSize} />,
    color: "text-purple-700",
    background: "bg-purple-700",
    isActive: true,
  },
  "ASP.NET MVC": {
    icon: <SiDotnet size={iconSize} />,
    color: "text-purple-600",
    background: "bg-purple-600",
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
    isActive: true,
  },

  // --- Skill Lainnya (Hanya untuk halaman proyek) ---
  "User Interface Design": {
    icon: <SiFigma size={iconSize} />,
    color: "text-pink-500",
    background: "bg-pink-500",
    isActive: false,
  },
  "User Experience (UX)": {
    icon: <SiFigma size={iconSize} />,
    color: "text-purple-500",
    background: "bg-purple-500",
    isActive: false,
  },
  Odoo: {
    icon: <SiOdoo size={iconSize} />,
    color: "text-purple-800",
    background: "bg-purple-800",
    isActive: true,
  },
  "Microsoft Project": {
    icon: <FaMicrosoft size={iconSize} />,
    color: "text-green-600",
    background: "bg-green-600",
    isActive: true,
  },
  HTML5: {
    icon: <SiHtml5 size={iconSize} />,
    color: "text-orange-500",
    background: "bg-orange-500",
    isActive: true,
  },
  "Cascading Style Sheets (CSS)": {
    icon: <SiCss3 size={iconSize} />,
    color: "text-blue-500",
    background: "bg-blue-500",
    isActive: true,
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    color: "text-violet-600",
    background: "bg-violet-600",
    isActive: true,
  },
  "Python (Programming Language)": {
    icon: <SiPython size={iconSize} />,
    color: "text-yellow-400",
    background: "bg-yellow-400",
    isActive: false,
  },
  bun: {
    icon: <SiBun size={iconSize} />,
    background: "bg-orange-100",
    color: "text-yellow-50",
    isActive: true,
  },
};
