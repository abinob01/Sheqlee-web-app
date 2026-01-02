// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import Breadcrumb from "../../components/ui/Breadcrumb";
// import JobCard from "../../components/cards/JobCard";
// import Pagination from "../../components/ui/Pagination";

// import blackFacebook from "../../assets/icons/blackFacebook.svg";
// import blackTwitter from "../../assets/icons/blackTwitter.svg";
// import blackTelegram from "../../assets/icons/blackTelegram.svg";
// import blackLinkedin from "../../assets/icons/blackLinkedin.svg";

// import subscribeBellIcon from "../../assets/icons/subscribeBellIcon.svg";
// import { TAGS } from "../../utils/tags.data";
// import { JOBS } from "../../utils/mockJobs";

// export default function TagsDetailGuest() {
//   const { id } = useParams();
//   const [subscribed, setSubscribed] = useState(false);

//   const tag = TAGS.find((t) => String(t.id) === id);

//   if (!tag) {
//     return <p className="text-center mt-20">Tag not found</p>;
//   }

//   return (
//     <>
//       {/* ================= BREADCRUMB ================= */}
//       <div className="hidden sm:block">
//         <Breadcrumb sectionLabel="Tags" sectionTo="/tags" current={tag.name} />
//       </div>

//       {/* ================= HEADER ================= */}
//       <section className="w-full py-[60px] max-sm:py-[36px] text-center">
//         <div className="max-w-3xl mx-auto px-4">
//           {/* Yellow tag box */}
//           <div className="relative mx-auto mb-6 w-[80px] h-[80px] rounded-md bg-[#F7C600] flex items-center justify-center">
//             <span className="font-bold text-black text-[28px]">
//               {tag.name.slice(0, 2).toUpperCase()}
//             </span>

//             {/* inner icon (bottom-right) */}
//             <span className="absolute bottom-1 right-1 text-[10px] font-semibold">
//               JS
//             </span>
//           </div>

//           <h1 className="text-[35px] max-sm:text-[24px] font-kantumruy font-semibold">
//             {tag.name}
//           </h1>

//           <p className="mt-3 text-[20px] max-sm:text-[14px] opacity-80">
//             All job posts with the tag <strong>{tag.name}</strong>.
//           </p>

//           {/* Subscribe */}
//           <button
//             onClick={() => setSubscribed(true)}
//             className="mt-6 inline-flex items-center gap-2 bg-[#8967B3] text-white px-6 py-3 rounded-xl text-sm font-semibold"
//           >
//             <img src={subscribeBellIcon} alt="" className="w-4 h-4" />
//             Subscribe to tag
//           </button>

//           <p className="mt-4 text-[14px]">
//             Subscribers: <strong>{tag.subscribers}</strong>
//           </p>

//           {/* Socials */}
//           <div className="flex justify-center gap-4 mt-4">
//             <img src={blackFacebook} className="w-5 h-5" />
//             <img src={blackTwitter} className="w-5 h-5" />
//             <img src={blackTelegram} className="w-5 h-5" />
//             <img src={blackLinkedin} className="w-5 h-5" />
//           </div>
//         </div>
//       </section>

//       {/* ================= JOBS GRID ================= */}
//       <section className="max-w-7xl mx-auto px-[72px] lg:px-[48px] md:px-[36px] sm:px-[24px] max-sm:px-[14px] pb-[80px]">
//         <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px]">
//           {JOBS.filter((j) => j.tags?.includes(tag.name)).map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       </section>

//       <div className="px-[14px] sm:px-0 pb-[60px]">
//         <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
//       </div>
//     </>
//   );
// }

import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";
import JobCard from "../../components/cards/JobCard";
import Pagination from "../../components/ui/Pagination";

import blackFacebook from "../../assets/icons/blackFacebook.svg";
import blackTwitter from "../../assets/icons/blackTwitter.svg";
import blackTelegram from "../../assets/icons/blackTelegram.svg";
import blackLinkedin from "../../assets/icons/blackLinkedin.svg";

import subscribeBellIcon from "../../assets/icons/subscribeBellIcon.svg";
import { TAGS } from "../../utils/tags.data";
import { JOBS } from "../../utils/mockJobs";

export default function TagsDetailGuest() {
  const { id } = useParams();

  const tag = TAGS.find((t) => String(t.id) === id);

  if (!tag) {
    return <p className="text-center mt-20">Tag not found</p>;
  }

  return (
    <>
      {/* ================= BREADCRUMB ================= */}
      <div className="hidden sm:block">
        <Breadcrumb sectionLabel="Tags" sectionTo="/tags" current={tag.name} />
      </div>

      {/* ================= HEADER ================= */}
      <section className="w-full py-[60px] max-sm:py-[36px]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {/* Yellow tag box */}
          <div className="relative mx-auto mb-6 w-[80px] h-[80px] bg-[#F7C600] rounded-md flex items-center justify-center">
            {/* Nickname (bottom-right inside box) */}
            <span className="absolute bottom-1 right-1 text-[28px] font-bold text-black">
              {tag.name.slice(0, 2).toUpperCase()}
            </span>
          </div>

          {/* Tag name */}
          <h1 className="text-[35px] max-sm:text-[24px] font-kantumruy font-semibold">
            {tag.name}
          </h1>

          {/* Description */}
          <p className="mt-3 text-[20px] max-sm:text-[14px] opacity-80">
            All job posts with the tag <strong>{tag.name}</strong>.
          </p>

          {/* Subscribe button */}
          <button className="mt-6 inline-flex items-center gap-2 bg-[#8967B3] text-white px-6 py-3 rounded-xl text-sm font-semibold">
            <img src={subscribeBellIcon} alt="" className="w-4 h-4" />
            Subscribe to tag
          </button>

          {/* Subscribers */}
          <p className="mt-4 text-[14px]">
            Subscribers: <strong>{tag.subscribers}</strong>
          </p>

          {/* Socials */}
          <div className="flex justify-center gap-4 mt-4">
            <img src={blackFacebook} alt="" className="w-5 h-5" />
            <img src={blackTwitter} alt="" className="w-5 h-5" />
            <img src={blackTelegram} alt="" className="w-5 h-5" />
            <img src={blackLinkedin} alt="" className="w-5 h-5" />
          </div>
        </div>
      </section>

      <section className="px-[72px] pb-[80px] lg:px-[48px] md:px-[36px] sm:px-[24px] max-sm:px-[14px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* ================= PAGINATION ================= */}
      <div className="px-[14px] sm:px-0 pb-[60px]">
        <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
      </div>
    </>
  );
}
