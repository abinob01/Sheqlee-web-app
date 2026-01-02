import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import latestJobCalendarIcon from "../../assets/icons/latestJobCalendarIcon.svg";
import latestJobclockIcon from "../../assets/icons/latestJobclockIcon.svg";
import latestJobcompanyIcon from "../../assets/icons/latestJobcompanyIcon.svg";
import pricePerHourIcon from "../../assets/icons/latestJobCalendarIcon.svg";

export default function JobCard({ job }) {
  return (
    <Link
      to={`/jobs/${job.id}`}
      className="
        block bg-[#F7F7F7] rounded-[20px]
        p-4 sm:p-5 lg:p-[30px]
        hover:shadow-md transition h-full
      "
    >
      <div className="flex flex-col">
        {/* Title */}
        <div className="flex items-center gap-3 mb-4 lg:mb-[28px]">
          {job.icon && (
            <img
              src={job.icon}
              alt=""
              className="w-[22px] h-[26px] lg:w-[26px] lg:h-[30px]"
            />
          )}

          <h3 className="font-kantumruy font-medium text-base sm:text-lg lg:text-[26px]">
            {job.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mb-5 lg:mb-[40px] text-sm lg:text-[18.3px]">
          {job.description}
        </p>

        {/* Info grid */}
        <div className="grid grid-cols-3 gap-2 lg:gap-[12px] text-[10px] lg:text-[11px]">
          {[job.posted, job.company, job.type, job.level, job.salary].map(
            (item, i) => (
              <span
                key={i}
                className="bg-[#DFDFDF] px-2 py-1 rounded flex items-center gap-2"
              >
                <img
                  src={
                    [
                      latestJobCalendarIcon,
                      latestJobcompanyIcon,
                      latestJobclockIcon,
                      latestJobCalendarIcon,
                      pricePerHourIcon,
                    ][i]
                  }
                  className="w-3 h-3 lg:w-[15px] lg:h-[15px]"
                />
                {item}
              </span>
            )
          )}

          <button className="bg-[#8967B3] text-white px-3 py-1 rounded text-xs lg:text-[12px] font-kantumruy font-medium">
            Apply
          </button>
        </div>
      </div>
    </Link>
  );
}

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};
