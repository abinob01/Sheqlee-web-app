// import Breadcrumb from "../../components/ui/Breadcrumb";
// import Button from "../../components/ui/Button";

// import googleIcon from "../../assets/images/googleIcon.png";
// import metaIcon from "../../assets/images/metaIcon.png";
// import microsoftIcon from "../../assets/images/microsoftIcon.png";
// import appleIcon from "../../assets/images/appleIcon.png";

// function StatCard({ value, title, description, reverse = false }) {
//   return (
//     <div
//       className={`flex ${
//         reverse ? "flex-row-reverse" : "flex-row"
//       } items-stretch gap-6 bg-white rounded-xl p-6`}
//     >
//       {/* BLACK STAT BOX */}
//       <div
//         className={`
//           bg-black text-white
//           w-[110px]
//           flex items-center justify-center
//           text-[22px] font-bold
//           self-stretch
//           ${reverse ? "rounded-r-lg" : "rounded-l-lg"}
//         `}
//       >
//         {value}
//       </div>

//       {/* TEXT */}
//       <div className="flex flex-col justify-center text-left">
//         <h3 className="font-kantumruy font-semibold text-[18px] mb-1">
//           {title}
//         </h3>
//         <p className="text-[14px] opacity-80 max-w-sm">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function ClientsGuest() {
//   return (
//     <>
//       {/* ================= BREADCRUMB ================= */}
//       <div className="hidden sm:block">
//         <Breadcrumb
//           sectionLabel="Clients"
//           sectionTo="/clients"
//           current="Clients"
//         />
//       </div>

//       {/* ================= HEADER ================= */}
//       <section className="text-center py-[60px] px-4">
//         <h1 className="text-[36px] font-kantumruy font-semibold mb-3">
//           Sheqlee for Clients
//         </h1>

//         <p className="max-w-xl mx-auto text-[16px] opacity-80 mb-6">
//           Access a pool of talented, competent and dedicated experts and
//           professionals from Ethiopia.
//         </p>

//         <div className="flex justify-center gap-4">
//           <Button
//             variant="outline"
//             className="border-[2px] border-[#8967B3] !text-black px-6 py-2 rounded-lg"
//           >
//             Log in
//           </Button>

//           <Button className="bg-[#8967B3] text-white px-6 py-2 rounded-lg">
//             Register as an employer
//           </Button>
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="max-w-3xl mx-auto px-4 space-y-6">
//         <StatCard
//           value="1.5M+"
//           title="Unique alerts delivered"
//           description="We have been delivering notifications about new remote jobs to job seekers since the website launched."
//         />

//         <StatCard
//           reverse
//           value="49.7K+"
//           title="Telegram Channel Subscribers"
//           description="We have a Telegram channel with 49,700+ subscribers. Our channel posts new jobs every day."
//         />

//         <StatCard
//           value="1.5M+"
//           title="Unique alerts delivered"
//           description="We have been delivering notifications about new remote jobs to job seekers since the website launched."
//         />

//         <StatCard
//           reverse
//           value="49.7K+"
//           title="Telegram Channel Subscribers"
//           description="We have a Telegram channel with 49,700+ subscribers. Our channel posts new jobs every day."
//         />
//       </section>

//       {/* ================= CTA ================= */}
//       <div className="text-center mt-10">
//         <Button className="bg-[#8967B3] text-white px-8 py-3 rounded-xl">
//           Post a job now
//         </Button>
//       </div>

//       {/* ================= TRUSTED BY ================= */}
//       <section className="bg-[#EFEFEF] mt-16 py-10 text-center">
//         <p className="mb-6 font-kantumruy font-medium">Trusted by</p>

//         <div className="flex justify-center gap-8">
//           <a href="https://google.com" target="_blank" rel="noreferrer">
//             <img src={googleIcon} alt="Google" className="h-6" />
//           </a>
//           <a href="https://meta.com" target="_blank" rel="noreferrer">
//             <img src={metaIcon} alt="Meta" className="h-6" />
//           </a>
//           <a href="https://microsoft.com" target="_blank" rel="noreferrer">
//             <img src={microsoftIcon} alt="Microsoft" className="h-6" />
//           </a>
//           <a href="https://apple.com" target="_blank" rel="noreferrer">
//             <img src={appleIcon} alt="Apple" className="h-6" />
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }

import Breadcrumb from "../../components/ui/Breadcrumb";
import Button from "../../components/ui/Button";

import googleIcon from "../../assets/images/googleIcon.png";
import metaIcon from "../../assets/images/metaIcon.png";
import microsoftIcon from "../../assets/images/microsoftIcon.png";
import appleIcon from "../../assets/images/appleIcon.png";
import { Link } from "react-router-dom";

function StatCard({ value, title, description, reverse = false }) {
  return (
    <div
      className={`
        flex ${reverse ? "flex-row-reverse" : "flex-row"}
        items-stretch gap-3 sm:gap-6
        bg-white rounded-xl
        p-3 xs:p-4 sm:p-6
      `}
    >
      {/* BLACK STAT BOX */}
      <div
        className={`
          bg-black text-white
          w-[60px] xs:w-[70px] sm:w-[90px] lg:w-[110px]
          flex items-center justify-center
          text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[22px]
          font-bold
          self-stretch
          ${reverse ? "rounded-r-lg" : "rounded-l-lg"}
        `}
      >
        {value}
      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-center text-left">
        <h3 className="font-kantumruy font-semibold text-[13px] xs:text-[14px] sm:text-[16px] lg:text-[18px] mb-1">
          {title}
        </h3>
        <p className="text-[11px] xs:text-[12px] sm:text-[13px] lg:text-[14px] opacity-80 max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ClientsGuest() {
  return (
    <>
      {/* ================= BREADCRUMB ================= */}
      <div className="hidden sm:block">
        <Breadcrumb
          sectionLabel="Clients"
          sectionTo="/clients"
          current="Clients"
        />
      </div>

      {/* ================= HEADER ================= */}
      <section className="text-center py-8 xs:py-10 sm:py-[60px] px-4">
        {/* Desktop / Tablet title */}
        <h1 className="hidden sm:block text-[32px] lg:text-[36px] font-kantumruy font-semibold mb-3">
          Sheqlee for Clients
        </h1>

        {/* Mobile title */}
        <h1 className="sm:hidden text-[22px] xs:text-[24px] font-kantumruy font-semibold mb-3">
          Qagnew for Clients
        </h1>

        <p className="max-w-xl mx-auto text-[13px] xs:text-[14px] sm:text-[15px] lg:text-[16px] opacity-80 mb-5">
          Access a pool of talented, competent and dedicated experts and
          professionals from Ethiopia.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Button
            variant="outline"
            className="border-[2px] border-[#8967B3] !text-black px-5 py-2 rounded-lg w-full sm:w-auto text-[13px]"
          >
            Log in
          </Button>

          <Link to="/company-signup">
            <Button className="bg-[#8967B3] text-white px-5 py-2 rounded-lg w-full sm:w-auto text-[13px]">
              Register as an employer
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-3xl mx-auto px-4 space-y-3 xs:space-y-4 sm:space-y-6">
        <StatCard
          value="1.5M+"
          title="Unique alerts delivered"
          description="We have been delivering notifications about new remote jobs to job seekers since the website launched."
        />

        <StatCard
          reverse
          value="49.7K+"
          title="Telegram Channel Subscribers"
          description="We have a Telegram channel with 49,700+ subscribers. Our channel posts new jobs every day."
        />

        <StatCard
          value="1.5M+"
          title="Unique alerts delivered"
          description="We have been delivering notifications about new remote jobs to job seekers since the website launched."
        />

        <StatCard
          reverse
          value="49.7K+"
          title="Telegram Channel Subscribers"
          description="We have a Telegram channel with 49,700+ subscribers. Our channel posts new jobs every day."
        />
      </section>

      {/* ================= CTA ================= */}
      <div className="text-center mt-6 xs:mt-8 sm:mt-10">
        <Button
          className="
            bg-[#8967B3] text-white
            px-5 xs:px-6 sm:px-8
            py-2 xs:py-2.5 sm:py-3
            rounded-xl
            text-[13px] xs:text-[14px]
            mx-auto
          "
        >
          Post a job now
        </Button>
      </div>

      {/* ================= TRUSTED BY ================= */}
      <section className="bg-[#EFEFEF] mt-10 xs:mt-12 sm:mt-16 py-6 xs:py-8 sm:py-10 text-center">
        <p className="mb-5 font-kantumruy font-medium text-[13px] xs:text-[14px] sm:text-[16px]">
          Trusted by
        </p>

        <div className="flex flex-wrap justify-center gap-5 xs:gap-6 sm:gap-8">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={googleIcon} alt="Google" className="h-4 xs:h-5 sm:h-6" />
          </a>
          <a href="https://meta.com" target="_blank" rel="noreferrer">
            <img src={metaIcon} alt="Meta" className="h-4 xs:h-5 sm:h-6" />
          </a>
          <a href="https://microsoft.com" target="_blank" rel="noreferrer">
            <img
              src={microsoftIcon}
              alt="Microsoft"
              className="h-4 xs:h-5 sm:h-6"
            />
          </a>
          <a href="https://apple.com" target="_blank" rel="noreferrer">
            <img src={appleIcon} alt="Apple" className="h-4 xs:h-5 sm:h-6" />
          </a>
        </div>
      </section>
    </>
  );
}
