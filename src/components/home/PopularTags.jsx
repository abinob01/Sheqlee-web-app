import TagCard from "../cards/TagCard";
import popularTagsDetailIcon from "../../assets/icons/popularTagsDetailIcon.svg";
import { Link } from "react-router-dom";
import { TAGS } from "../../utils/tags.data";
import React from "react";
import { ShimmerButton } from "react-shimmer-effects";

const PREVIEW_COUNT = 6;

export default function PopularTags() {
  const remainingCount = Math.max(TAGS.length - PREVIEW_COUNT, 0);

  return (
    <section className="bg-[#F7F7F7] px-4 sm:px-8 lg:px-[72px] pb-6 lg:pb-[30px]">
      {/* Header */}
      <div className="flex items-center justify-between pt-2 lg:pt-[10px] mb-4 lg:mb-[30px]">
        <h2 className="text-lg sm:text-2xl lg:text-[38px] font-kantumruy font-medium">
          Popular tags
        </h2>

        <Link
          to="/tags"
          className="flex items-center gap-2 lg:gap-3 font-kantumruy font-medium text-xs sm:text-sm lg:text-[17px]"
        >
          <span className="relative">
            {remainingCount > 0
              ? `${remainingCount}+ more tags`
              : "View all tags"}
            <span className="absolute left-0 -bottom-[5px] lg:-bottom-[7.5px] w-[40px] lg:w-[54px] h-[4px] lg:h-[5.4px] bg-[#8967B3]" />
          </span>

          <img
            src={popularTagsDetailIcon}
            alt=""
            className="w-[7px] h-[12px] lg:w-[9px] lg:h-[16px]"
          />
        </Link>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-y-4 sm:gap-y-6 lg:gap-y-[30px]
          gap-x-4 sm:gap-x-6 lg:gap-x-[87px]
        "
      >
        {TAGS.slice(0, PREVIEW_COUNT).map((tag) => (
          <TagCard key={tag.id} {...tag} />
        ))}
      </div>

      {/* Mobile pagination dots */}
      <div className="flex justify-center gap-2 mt-6 lg:hidden">
        <span className="w-2 h-2 rounded-full bg-[#8967B3]" />
        <span className="w-2 h-2 rounded-full bg-[#CFCFCF]" />
        <span className="w-2 h-2 rounded-full bg-[#CFCFCF]" />
      </div>
    </section>
  );
}
