import { Link } from "react-router-dom";
import JobCard from "../cards/JobCard";
import latestJobsDetaiIcon from "../../assets/icons/latestJobsDetaiIcon.svg";
import { JOBS } from "../../utils/mockJobs";

export default function LatestJobs({ jobs }) {
  const jobList = Array.isArray(jobs) ? jobs : JOBS;

  return (
    <section className="mt-6 lg:mt-[41px] px-4 sm:px-8 lg:px-[72px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 lg:mb-[45px]">
        <h2 className="text-lg sm:text-2xl lg:text-[38px] font-kantumruy font-medium">
          Latest job posts
        </h2>

        <Link
          to="/jobs"
          className="flex items-center gap-2 lg:gap-3 font-kantumruy font-medium text-xs sm:text-sm lg:text-[17px]"
        >
          <span className="relative">
            745+ more jobs
            <span className="absolute left-0 -bottom-[5px] lg:-bottom-[7.5px] w-[40px] lg:w-[54px] h-[4px] lg:h-[5.4px] bg-[#8967B3]" />
          </span>

          <img
            src={latestJobsDetaiIcon}
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
          gap-y-6 lg:gap-y-[38px]
          gap-x-4 sm:gap-x-6 lg:gap-x-[49px]
        "
      >
        {jobList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Mobile pagination */}
      <div className="flex justify-center gap-2 mt-6 lg:hidden">
        <span className="w-2 h-2 rounded-full bg-[#8967B3]" />
        <span className="w-2 h-2 rounded-full bg-[#CFCFCF]" />
        <span className="w-2 h-2 rounded-full bg-[#CFCFCF]" />
      </div>
    </section>
  );
}
