import { Link } from "react-router-dom";
import footerIcon from "../../assets/images/footerIcon.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import telegram from "../../assets/images/telegram.png";
import linkedin from "../../assets/images/linkedin.png";

const FOOTER_LINKS = {
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

const SOCIALS = [
  { icon: facebook, label: "Facebook", href: "#" },
  { icon: twitter, label: "Twitter", href: "#" },
  { icon: instagram, label: "Instagram", href: "#" },
  { icon: telegram, label: "Telegram", href: "@Read_2me" },
  { icon: linkedin, label: "LinkedIn", href: "#" },
  { icon: youtube, label: "YouTube", href: "dartmdya" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[2rem] px-6">
      <div className="mx-auto max-w-7xl pb-[0.5rem]">
        {/* LINKS FIRST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div
              key={title}
              className="
                w-fit
                text-left
                sm:mx-auto sm:text-center
                lg:mx-0 lg:text-left
              "
            >
              <h4 className="font-semibold text-lg mb-2">{title}</h4>

              <div
                className="
                  w-[110px] h-[2px] bg-white mb-4
                  sm:mx-auto lg:mx-0
                "
              />

              <ul className="space-y-2">
                {links.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="
                        font-Kantumruy font-light text-[15px]
                        hover:text-white transition-colors
                      "
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ICON + ADDRESS */}
        <div className="flex flex-col items-center mt-14">
          <img src={footerIcon} alt="Address icon" className="w-16 h-16 mb-3" />

          <h4 className="uppercase font-bold text-sm tracking-wide mb-3">
            Address
          </h4>

          <p className="font-Kantumruy font-light text-[15px]">
            MIT, Mekelle, Tigray
          </p>
        </div>

        {/* SOCIALS */}
        <div className="mt-10 flex flex-col items-center">
          <p className="font-Kantumruy font-light text-[15px] mb-3">
            Follow us on
          </p>

          <div className="flex gap-4">
            {SOCIALS.map(({ icon, label, href }) => (
              <Link key={label} to={href} aria-label={label}>
                <img src={icon} className="w-6 h-6" alt={label} />
              </Link>
            ))}
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-10 text-center font-Kantumruy font-light text-[15px]">
          © {new Date().getFullYear()} Sheqlee Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
