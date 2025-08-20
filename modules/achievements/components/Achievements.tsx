"use client";

import useSWR from "swr";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import EmptyState from "@/common/components/elements/EmptyState";
import { AchievementItem } from "@/common/types/achievements";
import { fetcher } from "@/services/fetcher";

import AchievementCard from "./AchievementCard";
import AchievementSkeleton from "./AchievementSkeleton";
import FilterHeader from "./FilterHeader";

const Achievements = () => {
  const t = useTranslations("AchievementsPage");
  const locale = useLocale(); // 1. Ambil bahasa yang aktif (misal: 'id' atau 'en')
  const params = useSearchParams();

  const category = params.get("category");
  const search = params.get("search");

  // Bangun URL API dengan semua parameter yang diperlukan
  const queryParams = new URLSearchParams();
  if (category) queryParams.append("category", category);
  if (search) queryParams.append("search", search);
  queryParams.append("lang", locale); // 2. Tambahkan parameter bahasa ke URL

  const apiUrl = `/api/achievements?${queryParams.toString()}`;

  const { data, isLoading, error } = useSWR<AchievementItem[]>(apiUrl, fetcher);

  // 3. Urutkan data berdasarkan tanggal, dari yang terbaru ke yang terlama
  const sortedAchievements = data?.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="space-y-4">
      <FilterHeader totalData={sortedAchievements?.length || 0} />

      {isLoading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <AchievementSkeleton key={i} />
          ))}
        </div>
      )}

      {error && <EmptyState message={t("error")} />}

      {/* 4. Gunakan data yang sudah diurutkan, tidak perlu filter lagi */}
      {!isLoading && !error && sortedAchievements && sortedAchievements.length === 0 && (
        <EmptyState message={t("no_data")} />
      )}

      {!isLoading && !error && sortedAchievements && sortedAchievements.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {sortedAchievements.map((item, index) => (
            <motion.div
              key={item.id} // Gunakan item.id yang unik sebagai key
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <AchievementCard {...item} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievements;