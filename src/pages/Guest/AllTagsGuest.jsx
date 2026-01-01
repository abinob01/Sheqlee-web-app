import Breadcrumb from "../../components/ui/Breadcrumb";
import TagCard from "../../components/cards/TagCard";
import Pagination from "../../components/ui/Pagination";

import allTagsIcon from "../../assets/icons/allTagsIcon.svg";
import { TAGS } from "../../utils/tags.data";

export default function AllTagsGuest() {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb sectionLabel="Tags" sectionTo="/tags" current="All" />

      {/* Header */}
      <section className="w-full py-[60px] text-center">
        <div className="max-w-7xl mx-auto px-[72px]">
          <img
            src={allTagsIcon}
            alt="All Tags"
            className="mx-auto mb-6 w-[64px] h-[64px]"
          />

          <h1 className="text-[35px] font-kantumruy font-semibold">All Tags</h1>

          <p className="mt-4 text-[27px] max-w-xl mx-auto opacity-80">
            Job tags along with their respective number of jobs posted and
            number of subscribers.
          </p>
        </div>
      </section>

      {/* Tags Grid */}
      <section className="px-[72px] pb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[87px] gap-y-[30px]">
          {TAGS.map((tag) => (
            <TagCard key={tag.id} {...tag} />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <Pagination currentPage={1} totalPages={40} onPageChange={() => {}} />
    </>
  );
}
