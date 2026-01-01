import Lottie from "lottie-react";
import { useState } from "react";
import heroAnimation from "../../assets/animations/heroAnimation.json";
import SignupPromptModal from "../../pages/Auth/SignupPromptModal.jsx";

export default function HeroSection() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  return (
    <section className="max-w-7xl mx-auto mt-8 md:mt-[3rem] mb-12 md:mb-[6.3rem] px-6 md:px-8 py-8 md:py-13 grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="px-0 md:pl-[30px] text-center md:text-left order-2 md:order-1">
        <h1 className="text-4xl md:text-[60px] text-[#000000] font-bold leading-tight md:leading-[1.1] mb-6 md:mb-[42px] pt-4 md:pt-[2.5rem] font-kantumruy">
          Recruit <span className="text-[#8967B3]">affordable</span>{" "}
          <br className="hidden md:block" />&{" "}
          <span className="text-[#8967B3]">skilled</span> Ethiopian
          professionals.
        </h1>

        <p className="text-[#000000] max-w-full md:max-w-[761px] font-kantumruy text-lg md:text-[26px] leading-relaxed md:leading-[34px] mb-8 md:mb-[2.7rem]">
          Web frontend, mobile app, backend, database, full-stack, data science,
          UI/UX & product design, project management, scrum master, etc.
        </p>

        <button
          onClick={() => setShowSignupModal(true)}
          className="flex items-center justify-center rounded-[20px] bg-[#8967B3]
             w-full md:max-w-[395px] h-[60px] md:h-[75px]
             transition-transform hover:scale-105"
        >
          <span className="text-white font-kantumruy font-semibold text-xl md:text-[28px]">
            Post your projects
          </span>
        </button>
      </div>

      {/* Lottie Animation: Appears first on mobile for better visual flow */}
      <div className="order-1 md:order-2">
        <Lottie
          animationData={heroAnimation}
          alt="Developers finding Job using this web"
          loop
          className="w-full max-w-[400px] md:max-w-full mx-auto mb-8 md:mb-[2rem]"
        />
      </div>

      <SignupPromptModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      />
    </section>
  );
}
