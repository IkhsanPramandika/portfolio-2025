// File: ProfileHeader.tsx

import Link from "next/link";
import { MdVerified as VerifiedIcon } from "react-icons/md";

import ThemeToggle from "./ThemeToggle";
import IntlToggle from "./IntlToggle";
import Tooltip from "../../elements/Tooltip";
import Image from "../../elements/Image";

import cn from "@/common/libs/clsxm";

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-grow items-center gap-4 lg:flex-col lg:gap-0.5",
        expandMenu && "flex-col !items-start",
      )}
    >
      <Image
        src={"/images/isan1.jpg"}
        width={expandMenu ? 80 : imageSize * 0.9}
        height={expandMenu ? 80 : imageSize * 0.9}
        alt="Ikhsan Pramandika"
        className="border-2 border-neutral-400 dark:border-neutral-600 lg:hover:scale-105"
        rounded="rounded-full"
      />

      {/* Tambahkan min-w-0 agar truncate bekerja */}
      <div className="mt-1 flex min-w-0 items-center gap-2 lg:mt-4">
        <Tooltip title="Muhammad Ikhsan Pramandika">
          <Link href="/" passHref>
            {/* Ganti nama dan ukuran font jika perlu */}
            <h1 className="flex-grow truncate text-base font-medium lg:text-lg">
              Ikhsan Pramandika
            </h1>
          </Link>
        </Tooltip>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>

      <div className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
        @ikhsanpramandika
      </div>

      <div className="hidden justify-between gap-6 lg:mt-4 lg:flex">
        <IntlToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ProfileHeader;
