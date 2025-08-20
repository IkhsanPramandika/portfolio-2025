import Image from "next/image";
import { differenceInDays, format } from "date-fns";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

import Tooltip from "@/common/components/elements/Tooltip";
import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { MonkeytypeData } from "@/common/types/monkeytype";

// --- FUNGSI HELPER BARU ---
// Fungsi untuk mengubah total detik menjadi format HH:mm:ss dengan aman
const formatTypingTime = (totalSeconds: number) => {
  // Menangani kasus jika data tidak valid atau tidak ada
  if (isNaN(totalSeconds) || totalSeconds < 0) {
    return "00:00:00";
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  // Tambahkan '0' di depan jika angkanya < 10 untuk format yang konsisten
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};
// -------------------------


interface ProfileProps {
  data: MonkeytypeData;
}

interface ItemProps {
  label?: string;
  value?: number | string;
}

const Item = ({ label, value }: ItemProps) => (
  <div className="flex flex-col items-center">
    <span className="text-xs text-neutral-600 dark:text-neutral-400">
      {label}
    </span>
    <span className="text-2xl text-blue-600">{value}</span>
  </div>
);

const Profile = ({ data }: ProfileProps) => {
  const t = useTranslations("DashboardPage.monkeytype");

  const date = new Date(data?.addedAt);
  const endDate = new Date();
  const durationDays = differenceInDays(endDate, date);

  // --- PERBAIKAN: Ambil total detik dengan aman ---
  const timeTypingInSeconds = data?.typingStats?.timeTyping || 0;
  // ---------------------------------------------

  let xp = data?.xp || 0;
  let level = 1;
  let xpNeeded = 100;

  while (xp >= xpNeeded) {
    xp -= xpNeeded;
    xpNeeded += 49;
    level++;
  }

  const xpToNextLevel = level * 49 + 100;
  const difference = (xp / xpToNextLevel) * 100;
  const remainder = xpToNextLevel - xp;

  const progressVariants: Variants = {
    initial: { width: 0 },
    animate: {
      width: `${Math.round(difference)}px`,
      transition: { delay: 0.8 },
    },
  };

  const XpProgress = () => (
    <div className="flex w-full items-center justify-between gap-3">
      <Tooltip title={`${data?.xp || 0} ${t("total_xp")}`}>
        <span className="text-sm font-medium text-blue-600">{level}</span>
      </Tooltip>

      <div className="relative h-2 w-full rounded-full bg-neutral-300 dark:bg-dark ">
        <motion.span
          initial="initial"
          animate="animate"
          variants={progressVariants}
          className="absolute left-0 top-0 h-2 rounded-full bg-neutral-600 dark:bg-neutral-50"
        >
          &ensp;
        </motion.span>
      </div>

      <Tooltip title={`${remainder} xp until next level`}>
        <span className="text-xs text-neutral-600 dark:text-neutral-400">
          {xp}/{Math.floor(xpToNextLevel)}
        </span>
      </Tooltip>
    </div>
  );

  return (
    <SpotlightCard className="flex flex-col items-center gap-x-8 gap-y-4 p-4 sm:flex-row">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-4">
          <div className="flex items-center">
            <Image
              src={"/images/isan1.jpg"}
              width={80}
              height={80}
              alt="Ikhsan Pramandika"
              className="rounded-full border-2 border-neutral-400 transition-all duration-300 dark:border-neutral-600 lg:hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-medium text-blue-600">
              {data?.name}
            </span>
            <Tooltip title={`${durationDays} ${t("days_ago")}`}>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                {t("joined")} {format(date, "dd MMM yyyy")}
              </span>
            </Tooltip>
            <Tooltip
              title={`${t("current_streak")}: ${data?.maxStreak} ${t("unit_days")}`}
            >
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                {t("current_streak")}: {data?.streak} {t("unit_days")}
              </span>
            </Tooltip>
          </div>
        </div>

        <XpProgress />
      </div>

      <span className="hidden h-24 w-2 rounded-full bg-neutral-300 p-1 dark:bg-dark sm:inline-block" />

      <div className="flex flex-grow flex-col items-center justify-between rounded-xl sm:flex-row sm:px-4 sm:py-3">
        <Item
          label={t("title_test_started")}
          value={data?.typingStats.startedTests || "N/A"}
        />
        <Item
          label={t("title_test_completed")}
          value={data?.typingStats.completedTests || "N/A"}
        />
        <Item
          label={t("title_time_typing")}
          // --- PERBAIKAN: Menggunakan fungsi helper yang aman ---
          value={formatTypingTime(timeTypingInSeconds)}
          // ----------------------------------------------------
        />
      </div>
    </SpotlightCard>
  );
};

export default Profile;