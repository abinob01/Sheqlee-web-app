import { useState } from "react";
import { Link } from "react-router-dom";

import JobCard from "../../components/cards/JobCard";
import PopularTags from "../../components/home/PopularTags";
import latestJobsDetaiIcon from "../../assets/icons/latestJobsDetaiIcon.svg";

const INITIAL_VISIBLE = 6;

export default function HomeFreelancer() {
  const [showAll, setShowAll] = useState(false);

  // MOCK DATA (replace later with API)
  const jobs = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: "UI/UX Designer",
    company: "KeplerLab",
    type: "Part-time",
    level: "Intermediate",
    salary: "$25/hr",
  }));

  const visibleJobs = showAll ? jobs : jobs.slice(0, INITIAL_VISIBLE);

  return (
    <>
      {/* ================= CONTENT ================= */}
      <main className=" px-8 py-10 space-y-12">
        {/* LATEST JOBS */}
        <section>
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
            {visibleJobs.slice(0, 6).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>

        {/* POPULAR TAGS */}
        <PopularTags />

        {/* MORE JOBS */}
        <section>
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
            {visibleJobs.slice(6).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-lg text-sm bg-[#8967B3] text-white"
            >
              {showAll ? "Show less jobs" : "View all job posts"}
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
