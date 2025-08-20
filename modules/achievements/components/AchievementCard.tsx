import Link from "next/link";
import { useTranslations } from "next-intl";
import { format, parseISO } from "date-fns";
import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";

import Image from "@/common/components/elements/Image";
import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { AchievementItem } from "@/common/types/achievements";

const AchievementCard = ({
  title,
  description,
  date,
  image_url,
  certificate_url,
}: AchievementItem) => {
  // Format tanggal dari 'YYYY-MM-DD' menjadi 'MMMM yyyy' (contoh: August 2025)
  const formattedDate = format(parseISO(date), "MMMM yyyy");

  const t = useTranslations("AchievementsPage");

  // Gunakan link sertifikat jika ada, jika tidak, link tidak akan kemana-mana
  const linkHref = certificate_url || "#";

  return (
    <Link href={linkHref} className="flex h-full" target="_blank">
      <SpotlightCard className="group flex h-full flex-col overflow-hidden">
        <div className="relative">
          <Image
            src={image_url || "/placeholder-image.jpg"} // Gunakan placeholder jika gambar tidak ada
            alt={title}
            width={500}
            height={200}
            className="min-h-[180px] w-full rounded-t-xl object-cover md:h-[170px]"
          />
          {certificate_url && (
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-lg bg-black text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-80 dark:text-neutral-50">
              <span>{t("show_credential")}</span>
              <ViewIcon size={20} />
            </div>
          )}
        </div>
        <div className="my-auto space-y-2 p-4">
          <p className="font-semibold text-neutral-900 dark:text-neutral-300">
            {title}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
          <div className="space-y-1 pt-2">
            <p className="text-xs text-neutral-400 dark:text-neutral-500 ">
              Issued on
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {formattedDate}
            </p>
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
};

export default AchievementCard;
