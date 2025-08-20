import type { MultiLanguageText, MultiLanguageResponsibilities } from ".";
export interface CareerProps {
  position: MultiLanguageText;
  company: string;
  logo: string | null;
  location: string;
  location_type: MultiLanguageText;
  type: MultiLanguageText;
  start_date: string;
  end_date: string | null;
  industry: MultiLanguageText;
  link: string | null;
  responsibilities?: MultiLanguageResponsibilities;
  isShow?: boolean;
  indexCareer?: number;
}