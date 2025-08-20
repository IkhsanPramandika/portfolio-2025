// File: src/modules/about/components/CareerCard.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { BsBuildings as CompanyIcon, BsChevronDown, BsChevronUp } from "react-icons/bs";

import type { CareerProps } from "@/common/types/careers";
import type { 
  MultiLanguageText, 
  MultiLanguageResponsibilities 
} from "@/common/types";

import SpotlightCard from "@/common/components/elements/SpotlightCard";

const CareerCard = ({
  position,
  company,
  logo,
  location,
  location_type,
  type,
  start_date,
  end_date,
  industry,
  link,
  responsibilities,
}: CareerProps) => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SpotlightCard className="flex flex-col items-start gap-5 p-6 md:flex-row">
      {logo ? (
        <Image width={70} height={70} src={logo} alt={company} />
      ) : (
        <CompanyIcon size={65} />
      )}

      <div className="w-full space-y-1">
        <a href={link || "#"} target="_blank" className="hover:underline">
          <h6 className="font-semibold text-neutral-800 dark:text-neutral-50">{position[locale as keyof MultiLanguageText]}</h6>
        </a>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <span>{company}</span>
            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">•</span>
            <span>{industry[locale as keyof MultiLanguageText]}</span>
          </div>
          <div className="flex flex-col gap-1 text-[12px] md:flex-row md:gap-2">
            <span className="dark:text-neutral-500">
              {start_date} - {end_date}
            </span>
            <span className="hidden rounded-full text-neutral-300 dark:text-neutral-700 md:block">•</span>
            <span>{location}</span>
            <span className="hidden rounded-full text-neutral-300 dark:text-neutral-700 md:block">•</span>
            <span>{type[locale as keyof MultiLanguageText]}</span>
          </div>
        </div>

        {responsibilities && responsibilities[locale as keyof MultiLanguageResponsibilities] && (
          <div className="mt-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              {isOpen ? <BsChevronUp /> : <BsChevronDown />}
              <span>
                {isOpen ? 'Hide Responsibilities' : 'Show Responsibilities'}
              </span>
            </button>

            {isOpen && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
                {responsibilities[locale as keyof MultiLanguageResponsibilities].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </SpotlightCard>
  );
};

export default CareerCard;