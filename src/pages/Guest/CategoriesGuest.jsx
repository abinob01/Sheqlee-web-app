import Breadcrumb from "../../components/ui/Breadcrumb";
import CategoryCard from "../../components/cards/CategoryCard";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import categoriesIcon from "../../assets/icons/categoriesIcon.svg";

import { CATEGORIES } from "../../utils/categories.data";

export default function CategoriesGuest() {
  return (
    <>
      <Breadcrumb
        sectionLabel="Categories"
        sectionTo="/categories"
        current="All"
      />

      <section className="w-full py-[60px]">
        <div className="flex flex-col items-center text-center mb-[60px]">
          <div className="mb-6">
            <img
              src={categoriesIcon}
              alt="Categories icon"
              className="w-[70px] h-[70px]"
            />
          </div>

          <h1 className="text-[35px] font-kantumruy font-semibold text-[#000000]">
            All Categories
          </h1>

          <p className="mt-4 max-w-xl text-[23px] text-[#000000] leading-[32px] font-kantumruy">
            Job categories along with their respective number of jobs posted and
            number of subscribers.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[30px]">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                name={cat.name}
                jobs={cat.jobs}
                subscribers={cat.subscribers}
                icon={cat.icon || categoriesIcon}
              />
            ))}
          </div>
        </div>
      </section>

      <DeveloperCTA />
    </>
  );
}
