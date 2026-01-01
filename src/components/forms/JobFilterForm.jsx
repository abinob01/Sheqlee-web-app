import { useState } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import iconSearch from "../../assets/icons/iconSearch.svg";
import placeholder from "../../assets/icons/placeholder.svg";
import rightPositionArrow from "../../assets/icons/rightPositionArrow.svg";

export default function JobFilterForm({
  onApply,
  titleOptions,
  typeOptions,
  levelOptions,
}) {
  const [filters, setFilters] = useState({
    title: "",
    type: "",
    level: "",
    search: "",
  });

  return (
    <div className="">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 bg-[#FCFCFC] max-w-7xl pl-[7.8rem] py-[19px] text-sm text-[#000000]">
        <img src={placeholder} className="w-[15px] h-[23px]" />
        <span className="text-[19px]">Sheqlee</span>
        <img src={rightPositionArrow} className="w-[5px]" />
        <span className="text-[19px]">All Jobs</span>
      </div>
      <div className="rounded-2xl shadow-sm mt-10 ">
        <h1 className="text-[45px] text-center text-[#000000] font-kantumruy font-semibold">
          All Job Posts
        </h1>

        <p className="text-center text-[27px] text-[#000000] font-kantumruy mt-4 max-w-2xl mx-auto">
          Browse the latest jobs you can take up right now. Use filters to find
          the best jobs for your skillset.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-4xl">
            <Select
              placeholder="All job titles"
              options={titleOptions}
              onChange={(e) =>
                setFilters({ ...filters, title: e.target.value })
              }
            />

            <Select
              placeholder="All types"
              options={typeOptions}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            />

            <Select
              placeholder="All levels"
              options={levelOptions}
              onChange={(e) =>
                setFilters({ ...filters, level: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
            <div className="relative w-full">
              <img
                src={iconSearch}
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5"
              />
              <Input
                placeholder="Search by programming technology or field..."
                className="w-full text-[21px] text-[#444444] tracking-[0] font-kantumruy rounded-[11px] pl-14 py-[18px] bg-[#DFDFDF]"
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
            </div>

            <button
              onClick={() => onApply(filters)}
              className="w-full sm:w-[250px] h-[60px] bg-[#8967B3] text-white text-[20px] font-semibold rounded-[11px]"
            >
              Apply filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
