import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import Button from "../ui/Button";

import navbarIcon from "../../assets/icons/navbarIcon.svg";
import navCategoriesIcon from "../../assets/icons/navCategoriesIcon.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinkStyles = ({ isActive }) =>
    `flex items-center h-full transition-colors duration-200 border-b-[8px] ${
      isActive
        ? "border-[#8967B3] text-black"
        : "border-transparent text-gray-700 hover:text-[#8967B3]"
    }`;

  return (
    <>
      <header className="w-full bg-[#f7f7f7] relative z-40">
        <nav
          className="
            flex items-center justify-between
            h-[68px] md:h-[140px]
            px-3 sm:px-6 md:px-10
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-3 sm:gap-7 shrink-0 relative">
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-2xl"
              aria-label="Open menu"
            >
              ☰
            </button>

            <Link to="/" className="flex items-center gap-3 sm:gap-7">
              <img
                src={navbarIcon}
                alt="Sheqlee"
                className="max-w-[33px] md:max-w-[57px]"
              />
              <span className="font-recoleta font-bold text-[20px] md:text-[35px]">
                Sheqlee
              </span>
            </Link>

            {/* MOBILE DROPDOWN */}
            {mobileOpen && (
              <div
                ref={menuRef}
                className="
                  absolute
                  top-[52px]
                  left-0
                  w-[180px]
                  bg-white
                  rounded-[6px]
                  shadow-lg
                  py-3
                  md:hidden
                "
              >
                <NavLink
                  to="/jobs"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 font-kantumruy text-[16px] hover:bg-gray-100"
                >
                  All jobs
                </NavLink>

                <NavLink
                  to="/categories"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-2 font-kantumruy text-[16px] hover:bg-gray-100"
                >
                  Categories
                  <img src={navCategoriesIcon} alt="" className="w-3 h-3" />
                </NavLink>

                <NavLink
                  to="/clients"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 font-kantumruy text-[16px] hover:bg-gray-100"
                >
                  Clients
                </NavLink>
              </div>
            )}
          </div>

          {/* RIGHT — DESKTOP (UNCHANGED) */}
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
                  <img src={navCategoriesIcon} alt="" className="w-3 h-3" />
                </div>
              </NavLink>

              <NavLink to="/clients" className={navLinkStyles}>
                Clients
              </NavLink>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 ml-2">
              <Button
                variant="outline"
                className="
                  border-[2px] md:border-[3px] border-[#8967B3] !text-black
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

      {/* BACKDROP — MOBILE ONLY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    </>
  );
}
