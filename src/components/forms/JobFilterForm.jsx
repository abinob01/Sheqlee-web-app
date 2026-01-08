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
      <div className="rounded-2xl mt-10 ">
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

// import { useState } from "react";
// import Input from "../ui/Input";
// import Select from "../ui/Select";
// import iconSearch from "../../assets/icons/iconSearch.svg";
// import placeholder from "../../assets/icons/placeholder.svg";
// import rightPositionArrow from "../../assets/icons/rightPositionArrow.svg";

// export default function JobFilterForm({
//   onApply,
//   titleOptions,
//   typeOptions,
//   levelOptions,
// }) {
//   const [filters, setFilters] = useState({
//     title: "",
//     type: "",
//     level: "",
//     search: "",
//   });

//   return (
//     <div>
//       {/* Breadcrumb – hidden on mobile */}
//       <div className="hidden sm:flex items-center gap-2 bg-[#FCFCFC] max-w-7xl mx-auto px-[72px] py-[19px] text-sm">
//         <img src={placeholder} className="w-[15px] h-[23px]" />
//         <span className="text-[19px]">Sheqlee</span>
//         <img src={rightPositionArrow} className="w-[5px]" />
//         <span className="text-[19px]">All Jobs</span>
//       </div>

//       <div className="rounded-2xl mt-10 px-4 sm:px-6">
//         <h1 className="text-[#000000] text-[28px] sm:text-[36px] md:text-[45px] text-center font-kantumruy font-semibold">
//           All Job Posts
//         </h1>

//         <p className="text-center text-[16px] sm:text-[22px] md:text-[27px] mt-4 max-w-2xl mx-auto">
//           Browse the latest jobs you can take up right now.Use filters to find
//           the best jobs for your skillset.
//         </p>

//         {/* FILTERS */}
//         <div className="mt-10 flex justify-center">
//           <div
//             className="
//               grid
//               grid-cols-2
//               sm:grid-cols-2
//               lg:grid-cols-3
//               gap-5
//               w-full
//               max-w-4xl
//             "
//           >
//             {/* MOBILE ROW 1 — spans 2 */}
//             <div className="col-span-2 sm:col-span-1 lg:col-span-1">
//               <Select
//                 placeholder="All job titles"
//                 options={titleOptions}
//                 onChange={(e) =>
//                   setFilters({ ...filters, title: e.target.value })
//                 }
//               />
//             </div>

//             {/* MOBILE ROW 2 */}
//             <Select
//               placeholder="All types"
//               options={typeOptions}
//               onChange={(e) => setFilters({ ...filters, type: e.target.value })}
//             />

//             <Select
//               placeholder="All levels"
//               options={levelOptions}
//               onChange={(e) =>
//                 setFilters({ ...filters, level: e.target.value })
//               }
//             />

//             {/* MOBILE ROW 3 — spans 2 */}
//             <div className="relative col-span-2 sm:col-span-2 w-full">
//               <img
//                 src={iconSearch}
//                 className="absolute left-5 top-1/2 -translate-y-1/2 w-5"
//               />
//               <Input
//                 placeholder="Search by software technology..."
//                 className="w-full text-[21px] text-[#444444] tracking-[0] font-kantumruy rounded-[11px] pl-14 py-[18px] bg-[#DFDFDF]"
//                 onChange={(e) =>
//                   setFilters({ ...filters, search: e.target.value })
//                 }
//               />
//             </div>

//             {/* APPLY BUTTON — centered */}
//             <div className="col-span-2 lg:col-span-1 flex justify-center">
//               <button
//                 onClick={() => onApply(filters)}
//                 className="
//       w-full
//       sm:w-[250px]
//       h-[60px]
//       bg-[#8967B3]
//       text-white
//       text-[18px]
//       font-semibold
//       rounded-[11px]
//     "
//               >
//                 Apply filter
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
