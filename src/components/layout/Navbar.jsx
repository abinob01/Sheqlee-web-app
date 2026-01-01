import { Link, NavLink } from "react-router-dom";

import Button from "../ui/Button";

import navbarIcon from "../../assets/icons/navbarIcon.svg";
import navCategoriesIcon from "../../assets/icons/navCategoriesIcon.svg";

export default function Navbar() {
  const navLinkStyles = ({ isActive }) =>
    `flex items-center h-full transition-colors duration-200 border-b-[8px] ${
      isActive
        ? "border-[#8967B3] text-black"
        : "border-transparent text-gray-700 hover:text-[#8967B3]"
    }`;

  return (
    <>
      <header className="w-full bg-[#f7f7f7]">
        <nav
          className="
            flex items-center justify-between
            h-[68px] md:h-[140px] 
            px-3 sm:px-6 md:px-10
          "
        >
          <Link to="/" className="flex items-center gap-3 sm:gap-7 shrink-0">
            <img
              src={navbarIcon}
              alt="Sheqlee"
              className="max-w-[33px] md:max-w-[57px]"
            />
            <span className="font-recoleta font-bold text-[20px] md:text-[35px]">
              Sheqlee
            </span>
          </Link>

          <div className="flex items-center h-full gap-3 md:gap-10">
            <div
              className="
                hidden
                md:flex
                items-center
                h-full
                gap-6 lg:gap-10
                font-kantumruy
                text-[18px] lg:text-[20px]
                font-medium
              "
            >
              <NavLink to="/jobs" className={navLinkStyles}>
                All jobs
              </NavLink>

              <NavLink to="/categories" className={navLinkStyles}>
                <div className="flex items-center gap-2">
                  Categories
                  <img
                    src={navCategoriesIcon}
                    alt="categories navbar icon"
                    className="w-3 h-3"
                  />
                </div>
              </NavLink>

              <NavLink to="/clients" className={navLinkStyles}>
                Clients
              </NavLink>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 ml-2">
              <Button
                variant="outline"
                className="border-[2px] md:border-[3px] border-[#8967B3] !text-black
                  text-xs sm:text-base
                  px-3 sm:px-6
                  h-[36px] md:h-[55px]
                  rounded-[10px] md:rounded-[15px]
                "
              >
                Log in
              </Button>

              <Button
                className="
                  bg-[#8967B3] text-white
                  text-xs sm:text-base
                  px-3 sm:px-6
                  h-[36px] md:h-[55px]
                  rounded-[10px] md:rounded-[15px]
                "
              >
                Sign up
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
