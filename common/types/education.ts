import type { MultiLanguageText, MultiLanguageResponsibilities } from ".";
export interface EducationProps {
  school: string;
  major: MultiLanguageText;
  logo: string;
  location: string;
  degree: MultiLanguageText;
  start_year: number;
  end_year: number;
  link: string;
  responsibilities?: MultiLanguageResponsibilities;
  isShow?: boolean;
}