import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import popularTagsDot from "../../assets/icons/popularTagsDot.svg";

export default function TagCard({ id, name, jobs, subscribers }) {
  return (
    <Link to={`/tags/${id}`} className="block">
      <div className="pl-[42px] pb-[24px] pt-[15px] bg-[#DFDFDF] bg-no-repeat bg-clip-padding bg-left-top rounded-[15px] border-l-[15px] border-black opacity-100 cursor-pointer">
        {/* header */}
        <h3 className="w-[133px] h-[31px] mb-[15px] text-left font-kantumruy font-medium text-[27px] text-[#000000] tracking-[0px] opacity-100">
          {name}
        </h3>

        <p className="flex items-center gap-[12px] h-[25px] text-left font-kantumruy font-normal text-[21px] text-[#000000] tracking-[0px] opacity-100">
          {jobs} jobs
          <img
            src={popularTagsDot}
            alt="Dot Between Number of Jobs and Number of subscribers"
            className="bg-transparent w-[5.4px] h-[5.4px] opacity-100"
          />
          {subscribers} subscribers
        </p>
      </div>
    </Link>
  );
}

TagCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  jobs: PropTypes.number.isRequired,
  subscribers: PropTypes.number.isRequired,
};
