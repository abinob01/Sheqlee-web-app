import { useState } from "react";
import JobCard from "../../components/cards/JobCard";
import Pagination from "../../components/ui/Pagination";
import PlatformStatus from "../../components/home/PlatformStats";
import DeveloperCTA from "../../components/home/DeveloperCTA";

import DashboardFilterForm from "../../components/forms/DashboardFilterForm";

import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import noResultsIcon from "../../assets/icons/noResultsIcon.svg";

import { JOBS } from "../../utils/mockJobs";

export default function DashboardFreelancer() {
  const [filters, setFilters] = useState(null);

  const filteredJobs =
    filters === null
      ? JOBS
      : JOBS.filter((job) => {
          const categoryMatch =
            !filters.category || job.category === filters.category;

          const typeMatch = !filters.type || job.type === filters.type;

          const levelMatch = !filters.level || job.level === filters.level;

          const techMatch =
            !filters.tech ||
            job.tags?.some(
              (t) => t.toLowerCase() === filters.tech.toLowerCase()
            );

          return categoryMatch && typeMatch && levelMatch && techMatch;
        });

  const showNoResults = filters && filteredJobs.length === 0;

  return (
    <>
      {/* FILTER HEADER */}
      <DashboardFilterForm
        icon={dashboardIcon}
        title="Dashboard"
        description="These are jobs for you based on your skills."
        onApply={setFilters}
      />

      {/* RESULTS */}
      {showNoResults ? (
        <div className="flex flex-col items-center mt-20">
          <img src={noResultsIcon} className="w-24 mb-6" />
          <p className="text-[22px]">No results found</p>
        </div>
      ) : (
        <>
          <section className="px-4 sm:px-8 md:px-[48px] lg:px-[72px] py-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>

          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </>
      )}

      <DeveloperCTA />
      {!showNoResults && <PlatformStatus />}
    </>
  );
}
