import { Link } from "react-router-dom";
import footerIcon from "../../assets/images/footerIcon.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import telegram from "../../assets/images/telegram.png";
import linkedin from "../../assets/images/linkedin.png";

import React from "react";

const Footer = () => {
  const footerLinks = {
    ADDRESS: [{ text: "MIT, Mekelle, Tigray", href: "#" }],
    Links: [
      { text: "Companies", href: "/companies" },
      { text: "Categories", href: "/categories" },
      { text: "Tags", href: "/tags" },
    ],
    Company: [
      { text: "About", href: "/about" },
      { text: "Blog", href: "/blog" },
      { text: "Pricing", href: "/pricing" },
    ],
    Support: [
      { text: "Getting started", href: "/getting-started" },
      { text: "Contact", href: "/contact" },
      { text: "FAQ", href: "/faq" },
    ],
    Legal: [
      { text: "Privacy Policy", href: "/privacy-policy" },
      { text: "Terms and Conditions", href: "/terms" },
      { text: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  return (
    <footer className="bg-black text-white pt-[2rem]  px-6">
      <div className="mx-auto max-w-7xl pb-[0.5rem]">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* ADDRESS */}
          <div className="flex flex-col items-center mt-6">
            <img
              src={footerIcon}
              alt="Address icon"
              className="w-16 h-16 mb-3"
            />

            <h4 className="uppercase font-bold text-sm tracking-wide mb-3">
              Address
            </h4>

            <p
              className="text-[#FFFFFF] font-Kantumruy
  font-light
  text-[15px]
  
  tracking-[0px]
  "
            >
              MIT, Mekelle, Tigray
            </p>
          </div>

          {/* OTHER COLUMNS */}
          {Object.entries(footerLinks)
            .filter(([title]) => title !== "ADDRESS")
            .map(([title, links]) => (
              <div key={title} className="w-fit">
                <h4 className="font-semibold text-lg mb-2">{title}</h4>

                <div className="w-[110px] h-[2px] bg-[#FFFFFF] mb-4" />

                <ul className="space-y-2">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-[#FFFFFF] font-Kantumruy font-light text-[15px] tracking-[0px] hover:text-white transition-colors text-sm"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 mb-[10px] flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#FFFFFF] font-Kantumruy font-light text-[15px] tracking-[0px] pt-8">
            © {new Date().getFullYear()} Sheqlee Co., Ltd. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <p className="text-[#FFFFFF] font-Kantumruy font-light text-[15px] tracking-[0px] mb-3 text-left">
              Follow us on
            </p>

            {/* SOCIAL ICONS — LOCAL IMAGES + LINKS */}
            <div className="flex gap-4">
              <Link to="#" aria-label="Facebook">
                <img src={facebook} className="w-6 h-6" alt="Facebook" />
              </Link>

              <Link to="#" aria-label="Twitter">
                <img src={twitter} className="w-6 h-6" alt="Twitter" />
              </Link>

              <Link to="#" aria-label="Instagram">
                <img src={instagram} className="w-6 h-6" alt="Instagram" />
              </Link>

              <Link to="@Read_2me" aria-label="Telegram">
                <img src={telegram} className="w-6 h-6" alt="Telegram" />
              </Link>

              <Link to="#" aria-label="LinkedIn">
                <img src={linkedin} className="w-6 h-6" alt="LinkedIn" />
              </Link>

              <Link to="dartmdya" aria-label="YouTube">
                <img src={youtube} className="w-6 h-6" alt="YouTube" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
