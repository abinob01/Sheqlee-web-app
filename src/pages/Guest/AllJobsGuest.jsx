import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getJobsByTag } from "../../services/jobs.service";

import JobFilterForm from "../../components/forms/JobFilterForm";

import Pagination from "../../components/ui/Pagination";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import JobCard from "../../components/cards/JobCard";

import noResultsIcon from "../../assets/icons/noResultsIcon.svg";
import PlatformStatus from "../../components/home/PlatformStats";
import { JOBS } from "../../utils/mockJobs";

export default function AllJobsGuest() {
  const { data } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobsByTag,
  });

  const jobs = Array.isArray(data) ? data : [];

  const [filters, setFilters] = useState(null);

  const titleOptions = [
    ...new Set(jobs.map((j) => j.title)),
    "NotExistingJob",
  ].map((t) => ({ label: t, value: t }));

  const typeOptions = [
    ...new Set(jobs.map((j) => j.type)),
    "NotExistingType",
  ].map((t) => ({
    label: t,
    value: t,
  }));

  const levelOptions = [...new Set(jobs.map((j) => j.level))].map((l) => ({
    label: l,
    value: l,
  }));

  const filteredJobs =
    filters === null
      ? jobs
      : jobs.filter((job) => {
          const titleMatch = !filters.title || job.title === filters.title;
          const typeMatch = !filters.type || job.type === filters.type;
          const levelMatch = !filters.level || job.level === filters.level;

          const searchMatch =
            !filters.search ||
            job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            job.description
              .toLowerCase()
              .includes(filters.search.toLowerCase());

          return titleMatch && typeMatch && levelMatch && searchMatch;
        });

  const showNoResults = filters && filteredJobs.length === 0;

  return (
    <>
      <JobFilterForm
        onApply={setFilters}
        titleOptions={titleOptions}
        typeOptions={typeOptions}
        levelOptions={levelOptions}
      />
      {showNoResults ? (
        <div className="flex flex-col items-center ">
          <img src={noResultsIcon} className="w-24 mb-6" />
          <p className="text-[22px]">No results found</p>
        </div>
      ) : (
        <>
          <section className="px-4 sm:px-8 md:px-[48px] lg:px-[72px] py-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {JOBS.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>

          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </>
      )}
      <DeveloperCTA />
      {showNoResults || (
        <div className="container mx-auto px-4">
          <PlatformStatus />
        </div>
      )}
    </>
  );
}
