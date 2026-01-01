import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CategoryCard({ id, name, jobs, subscribers, icon }) {
  return (
    <Link to={`/categories/${id}`} className="block">
      <div className="flex items-stretch bg-[#F7F7F7] rounded-[15px] hover:shadow-sm transition overflow-hidden">
        {/* ICON */}
        <div className="w-[52px] xl:w-[96px] bg-black flex items-center justify-center">
          <img
            src={icon}
            alt={`${name} category icon`}
            className="w-6 h-6 xl:w-8 xl:h-8 object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="p-[18px]">
          <h3 className="text-[24px] font-kantumruy font-medium mb-2">
            {name}
          </h3>

          <p className="text-[14px] opacity-70">
            {jobs} jobs • {subscribers} subscribers
          </p>
        </div>
      </div>
    </Link>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.string.isRequired, // ✅ this is the slug
  name: PropTypes.string.isRequired,
  jobs: PropTypes.number.isRequired,
  subscribers: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};
