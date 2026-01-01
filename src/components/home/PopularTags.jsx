// import TagCard from "./TagCard";
// import popularTagsDetailIcon from "../../assets/icons/popularTagsDetailIcon.svg";
// import { Link } from "react-router-dom";

// import { TAGS } from "../../utils/tags.data";

// export default function PopularTags() {
//   return (
//     <section className="bg-[#F7F7F7] px-[72px] pb-[30px]">
//       {/* Header */}
//       <div className="flex items-center justify-between pt-[10px] mb-[30px]">
//         <h2 className="text-[#000000] text-[38px] font-kantumruy font-medium tracking-0">
//           Popular tags
//         </h2>

//         <Link
//           to="/tags"
//           className="flex items-center gap-3 font-kantumruy font-medium text-[17px] text-[#000000]"
//         >
//           <span className="relative">
//             73+ more tags
//             <span className="absolute left-0 -bottom-[7.5px] w-[54px] h-[5.4px] bg-[#8967B3]" />
//           </span>

//           <img
//             src={popularTagsDetailIcon}
//             alt="Arrow right popular tags detail"
//             className="w-[9px] h-[16px]"
//           />
//         </Link>
//       </div>

//       {/* Tags Grid */}
//       <div className="grid grid-cols-3 gap-x-[87px] gap-y-[30px]">
//         {TAGS.map((tag) => (
//           <TagCard
//             key={tag.id}
//             id={tag.id}
//             name={tag.name}
//             jobs={tag.jobs}
//             subscribers={tag.subscribers}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import TagCard from "../cards/TagCard";
import popularTagsDetailIcon from "../../assets/icons/popularTagsDetailIcon.svg";
import { Link } from "react-router-dom";
import { TAGS } from "../../utils/tags.data";

const PREVIEW_COUNT = 6;

export default function PopularTags() {
  const remainingCount = Math.max(TAGS.length - PREVIEW_COUNT, 0);

  return (
    <section className="bg-[#F7F7F7] px-[72px] pb-[30px]">
      {/* Header */}
      <div className="flex items-center justify-between pt-[10px] mb-[30px]">
        <h2 className="text-[#000000] text-[38px] font-kantumruy font-medium">
          Popular tags
        </h2>

        <Link
          to="/tags"
          className="flex items-center gap-3 font-kantumruy font-medium text-[17px]"
        >
          <span className="relative">
            {remainingCount > 0
              ? `${remainingCount}+ more tags`
              : "View all tags"}
            <span className="absolute left-0 -bottom-[7.5px] w-[54px] h-[5.4px] bg-[#8967B3]" />
          </span>

          <img
            src={popularTagsDetailIcon}
            alt="Arrow right"
            className="w-[9px] h-[16px]"
          />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-x-[87px] gap-y-[30px]">
        {TAGS.slice(0, PREVIEW_COUNT).map((tag) => (
          <TagCard key={tag.id} {...tag} />
        ))}
      </div>
    </section>
  );
}
