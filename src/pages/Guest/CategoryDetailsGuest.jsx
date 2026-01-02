// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import SignupPromptModal from "../../pages/Auth/SignupPromptModal";

// import Breadcrumb from "../../components/ui/Breadcrumb";
// import JobCard from "../../components/cards/JobCard";

// import blackFacebook from "../../assets/icons/blackFacebook.svg";
// import blackLinkedin from "../../assets/icons/blackLinkedin.svg";
// import blackTelegram from "../../assets/icons/blackTelegram.svg";
// import blackTwitter from "../../assets/icons/blackTwitter.svg";

// import { JOBS } from "../../utils/mockJobs";
// import { CATEGORIES } from "../../utils/categories.data";
// import Pagination from "../../components/ui/Pagination";

// const SOCIAL_LINKS = [
//   {
//     icon: blackFacebook,
//     url: "https://facebook.com",
//     label: "Facebook",
//   },
//   {
//     icon: blackTwitter,
//     url: "https://twitter.com",
//     label: "Twitter",
//   },
//   {
//     icon: blackTelegram,
//     url: "https://t.me",
//     label: "Telegram",
//   },
//   {
//     icon: blackLinkedin,
//     url: "https://linkedin.com",
//     label: "LinkedIn",
//   },
// ];

// export default function CategoryDetailsGuest() {
//   const { slug } = useParams();
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

//   const category = CATEGORIES.find((cat) => cat.id === slug);

//   if (!category) {
//     return (
//       <p className="text-center py-20 text-[18px] font-kantumruy">
//         Category not found
//       </p>
//     );
//   }

//   return (
//     <>
//       {/* Breadcrumb */}
//       <Breadcrumb
//         sectionLabel="Categories"
//         sectionTo="/categories"
//         current={category.name}
//       />

//       {/* HEADER */}
//       <section className="w-full py-[60px] text-center">
//         <div className="max-w-7xl mx-auto">
//           <img
//             src={category.icon}
//             alt={category.name}
//             className="mx-auto mb-6 w-[70px] h-[70px]"
//           />

//           <h1 className="text-[35px] font-kantumruy font-semibold">
//             {category.name}
//           </h1>

//           <p className="mt-4 text-[20px] max-w-xl mx-auto">
//             {category.description}
//           </p>

//           <button
//             onClick={() => setIsSignupModalOpen(true)}
//             className="mt-8 bg-[#8967B3] text-white px-[36px] py-[14px] rounded-[12px]"
//           >
//             Subscribe to category
//           </button>

//           <p className="mt-4 text-[14px] opacity-70">
//             Subscribers: <strong>{category.subscribers}</strong>
//           </p>

//           <div className="flex justify-center gap-4 mt-4">
//             {SOCIAL_LINKS.map(({ icon, url, label }, i) => (
//               <a
//                 key={i}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="w-6 h-6
//         bg-black
//         rounded-full
//         flex
//         items-center
//         justify-center
//         hover:scale-110
//         transition
//       "
//               >
//                 <img src={icon} alt={label} className="w-4 h-4 invert" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className=" px-[72px] pb-[80px]">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
//           {JOBS.map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       </section>
//       <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
//       <SignupPromptModal
//         isOpen={isSignupModalOpen}
//         onClose={() => setIsSignupModalOpen(false)}
//         message="Please register or login before you could subscribe to categories."
//       />
//     </>
//   );
// }

import { useParams } from "react-router-dom";
import { useState } from "react";
import SignupPromptModal from "../../pages/Auth/SignupPromptModal";

import Breadcrumb from "../../components/ui/Breadcrumb";
import JobCard from "../../components/cards/JobCard";

import blackFacebook from "../../assets/icons/blackFacebook.svg";
import blackLinkedin from "../../assets/icons/blackLinkedin.svg";
import blackTelegram from "../../assets/icons/blackTelegram.svg";
import blackTwitter from "../../assets/icons/blackTwitter.svg";
import subscribeBellIcon from "../../assets/icons/subscribeBellIcon.svg";

import { JOBS } from "../../utils/mockJobs";
import { CATEGORIES } from "../../utils/categories.data";
import Pagination from "../../components/ui/Pagination";

const SOCIAL_LINKS = [
  {
    icon: blackFacebook,
    url: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: blackTwitter,
    url: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: blackTelegram,
    url: "https://t.me",
    label: "Telegram",
  },
  {
    icon: blackLinkedin,
    url: "https://linkedin.com",
    label: "LinkedIn",
  },
];

export default function CategoryDetailsGuest() {
  const { slug } = useParams();
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const category = CATEGORIES.find((cat) => cat.id === slug);

  if (!category) {
    return (
      <p className="text-center py-20 text-[18px] font-kantumruy">
        Category not found
      </p>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        sectionLabel="Categories"
        sectionTo="/categories"
        current={category.name}
      />

      {/* HEADER */}
      <section className="w-full py-[60px] text-center">
        <div className="max-w-7xl mx-auto">
          <img
            src={category.icon}
            alt={category.name}
            className="mx-auto mb-6 w-[70px] h-[70px]"
          />

          <h1 className="text-[35px] font-kantumruy font-semibold">
            {category.name}
          </h1>

          <p className="mt-4 text-[20px] max-w-xl mx-auto">
            {category.description}
          </p>

          <button
            onClick={() => setIsSignupModalOpen(true)}
            className="mt-8 bg-[#8967B3] text-white px-[36px] py-[14px] rounded-[12px]
              inline-flex items-center gap-3"
          >
            <img src={subscribeBellIcon} alt="Subscribe" className="w-5 h-5" />
            Subscribe to category
          </button>

          <p className="mt-4 text-[14px] opacity-70">
            Subscribers: <strong>{category.subscribers}</strong>
          </p>

          <div className="flex justify-center gap-4 mt-4">
            {SOCIAL_LINKS.map(({ icon, url, label }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-6 h-6
                  bg-black
                  rounded-full
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  transition
                "
              >
                <img src={icon} alt={label} className="w-4 h-4 invert" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[72px] pb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />

      <SignupPromptModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        message="Please register or login before you could subscribe to categories."
      />
    </>
  );
}
