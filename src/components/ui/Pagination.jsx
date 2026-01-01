import leftArrowIcon from "../../assets/icons/leftArrowIcon.svg";
import rightArrowIcon from "../../assets/icons/rightArrowIcon.svg";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const visiblePages = () => {
    const pages = [];

    // First pages
    for (let i = 1; i <= Math.min(9, totalPages); i++) {
      pages.push(i);
    }

    // Ellipsis
    if (totalPages > 10) {
      pages.push("...");
      pages.push(totalPages - 1);
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="m-12 px-6">
      <div className="flex items-center justify-between">
        {/* Page numbers */}
        <div className="flex items-center gap-2">
          {visiblePages().map((page, index) =>
            page === "..." ? (
              <span key={index} className="px-3 py-2 text-gray-400 select-none">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-9 h-9 rounded-[11px] text-sm font-medium ${
                  currentPage === page
                    ? "bg-[#000000] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="w-9 h-9 rounded-[11px] bg-[#DFDFDF] flex items-center justify-center disabled:opacity-50"
          >
            <img src={leftArrowIcon} alt="Previous" />
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="w-9 h-9 rounded-[11px] bg-[#DFDFDF] flex items-center justify-center disabled:opacity-50"
          >
            <img src={rightArrowIcon} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}
