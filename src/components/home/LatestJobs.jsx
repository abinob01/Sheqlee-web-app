import { Link } from "react-router-dom";
import JobCard from "../cards/JobCard";
import latestJobsDetaiIcon from "../../assets/icons/latestJobsDetaiIcon.svg";
import { JOBS } from "../../utils/mockJobs";

export default function LatestJobs({ jobs }) {
  const jobList = Array.isArray(jobs) ? jobs : JOBS;

  return (
    <section className="mt-[41px] px-[72px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[45px]">
        <h2 className="text-[#000000] text-[38px] font-kantumruy font-medium">
          Latest job posts
        </h2>

        <Link
          to="/jobs"
          className="flex items-center gap-3 font-kantumruy font-medium text-[17px]"
        >
          <span className="relative">
            745+ more jobs
            <span className="absolute left-0 -bottom-[7.5px] w-[54px] h-[5.4px] bg-[#8967B3]" />
          </span>

          <img
            src={latestJobsDetaiIcon}
            alt="More jobs"
            className="w-[9px] h-[16px]"
          />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-x-[49px] gap-y-[38px]">
        {jobList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
