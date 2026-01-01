import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import latestJobCalendarIcon from "../../assets/icons/latestJobCalendarIcon.svg";
import latestJobclockIcon from "../../assets/icons/latestJobclockIcon.svg";
import latestJobcompanyIcon from "../../assets/icons/latestJobcompanyIcon.svg";
import pricePerHourIcon from "../../assets/icons/latestJobCalendarIcon.svg";

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posted: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }).isRequired,
};

export default function JobCard({ job }) {
  return (
    <Link
      to={`/jobs/${job.id}`}
      className="block bg-[#F7F7F7] rounded-[20px] p-[30px] hover:shadow-md transition h-full"
    >
      <div className="flex flex-col">
        {/* TITLE */}
        <div className="flex items-center gap-[11px] mb-[28px]">
          {job.icon && (
            <img
              src={job.icon}
              alt={`${job.title} job icon`}
              className="w-[26px] h-[30px]"
            />
          )}

          <h3 className="font-kantumruy font-medium text-[26px] text-[#000]">
            {job.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="mb-[40px] font-kantumruy text-[18.3px] text-[#000]">
          {job.description}
        </p>

        {/* EVERYTHING IN ONE GRID */}
        <div className="grid grid-cols-3 gap-[12px] text-[11px]">
          {/* posted */}
          <span className="bg-[#DFDFDF] px-[11px] py-[4.5px] rounded-[4.5px] flex items-center gap-[10px]">
            <img
              src={latestJobCalendarIcon}
              alt="time since job posted"
              className="w-[15px] h-[15px]"
            />
            <span>{job.posted}</span>
          </span>

          {/* company */}
          <span className="bg-[#DFDFDF] px-[11px] py-[4.5px] rounded-[4.5px] flex items-center gap-[10px]">
            <img
              src={latestJobcompanyIcon}
              alt="company name"
              className="w-[15px] h-[15px]"
            />
            <span>{job.company}</span>
          </span>

          {/* type */}
          <span className="bg-[#DFDFDF] px-[11px] py-[4.5px] rounded-[4.5px] flex items-center gap-[10px]">
            <img
              src={latestJobclockIcon}
              alt="job type"
              className="w-[15px] h-[15px]"
            />
            <span>{job.type}</span>
          </span>

          {/* level */}
          <span className="bg-[#DFDFDF] px-[11px] py-[4.5px] rounded-[6px] flex items-center gap-[10px]">
            <img
              src={latestJobCalendarIcon}
              alt="experience level"
              className="w-[15px] h-[15px]"
            />
            <span>{job.level}</span>
          </span>

          {/* salary */}
          <span className="bg-[#DFDFDF] px-[11px] py-[4.5px] rounded-[6px] flex items-center gap-[10px]">
            <img
              src={pricePerHourIcon}
              alt="salary per hour"
              className="w-[15px] h-[15px]"
            />
            <span>{job.salary}</span>
          </span>

          {/* APPLY — SAME GAP AS OTHERS */}
          <button className="bg-[#8967B3] text-white px-[16px] py-[6px] rounded-[7.5px] text-[12px] font-kantumruy font-medium">
            Apply
          </button>
        </div>
      </div>
    </Link>
  );
}

// export default function JobCard({ job }) {
//   return (
//     <Link
//       to={`/jobs/${job.id}`}
//       className="block bg-[#F7F7F7] rounded-[20px] p-[30px] hover:shadow-md transition h-full"
//     >
//       <div className="flex flex-col">
//         {/* TITLE */}
//         <div className="flex items-center gap-[11px] mb-[28px]">
//           {job.icon && (
//             <img
//               src={job.icon}
//               alt={`${job.title} job icon`}
//               className="w-[26px] h-[30px]"
//             />
//           )}

//           <h3 className="font-kantumruy font-medium text-[26px] text-[#000]">
//             {job.title}
//           </h3>
//         </div>

//         {/* DESCRIPTION */}
//         <p className="mb-[40px] font-kantumruy text-[18.3px] text-[#000]">
//           {job.description}
//         </p>

//         {/* META */}
//         <div className="grid grid-cols-3 gap-[12px] text-[11px] mb-[14px]">
//           <span className="bg-[#DFDFDF] px-[11px] py-[4.5px] rounded-[4.5px] flex items-center gap-[10px]">
//             <img
//               src={latestJobCalendarIcon}
//               alt="time since job posted"
//               className="w-[15px] h-[15px]"
//             />
//             <span>{job.posted}</span>
//           </span>

//           <span className="bg-[#DFDFDF] px-[11px] py-[4.5px] rounded-[4.5px] flex items-center gap-[10px]">
//             <img
//               src={latestJobcompanyIcon}
//               alt="company name"
//               className="w-[15px] h-[15px]"
//             />
//             <span>{job.company}</span>
//           </span>

//           <span className="bg-[#DFDFDF] px-[11px] py-[4.5px] rounded-[4.5px] flex items-center gap-[10px]">
//             <img
//               src={latestJobclockIcon}
//               alt="job type"
//               className="w-[15px] h-[15px]"
//             />
//             <span>{job.type}</span>
//           </span>
//         </div>

//         {/* FOOTER */}
//         <div className="flex items-center justify-between">
//           {/* LEFT BADGES */}
//           <div className="flex gap-[7.5px] whitespace-nowrap text-[11px]">
//             <span className="bg-[#DFDFDF] px-[11px] py-[4.5px] rounded-[6px] flex items-center gap-[10px]">
//               <img
//                 src={latestJobCalendarIcon}
//                 alt="experience level"
//                 className="w-[15px] h-[15px]"
//               />
//               <span>{job.level}</span>
//             </span>

//             <span className="bg-[#DFDFDF] text-[11px] px-[11px] py-[4.5px] rounded-[6px] flex items-center gap-[10px]">
//               <img
//                 src={pricePerHourIcon}
//                 alt="salary per hour"
//                 className="w-[15px] h-[15px]"
//               />
//               <span>{job.salary}</span>
//             </span>
//           </div>

//           {/* APPLY BUTTON */}
//           <button className="bg-[#8967B3] text-[#FFFFFF] px-[16px] py-[6px] rounded-[7.5px] text-[12px] font-kantumruy font-medium">
//             Apply
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// }
