// import Button from "../ui/Button";
// import partyCTAIcon from "../../assets/images/partyCTAIcon.png";

// const DeveloperCTA = () => {
//   return (
//     <section className=" bg-[#DFDFDF] max-w-full  flex md:flex-row items-center">
//       <div className="flex items-center gap-[38px] mx-auto p-[62px]">
//         <img
//           src={partyCTAIcon}
//           alt="party emoji in CTA"
//           className="w-[49px] h-[49px"
//         />
//         <p className="text-lg font-medium">
//           Are you a software developer in Ethiopia?
//         </p>

//         <Button className="bg-[#8967B3] mt-4 md:mt-0">Sign up</Button>
//       </div>
//     </section>
//   );
// };

// export default DeveloperCTA;

import Button from "../ui/Button";
import partyCTAIcon from "../../assets/images/partyCTAIcon.png";

const DeveloperCTA = () => {
  return (
    <section className="bg-[#DFDFDF] w-full">
      <div
        className="
          flex flex-col md:flex-row
          items-center
          gap-4 md:gap-[38px]
          justify-center
          text-center md:text-left
          px-4 py-8 md:p-[62px]
        "
      >
        <img
          src={partyCTAIcon}
          alt=""
          className="w-[40px] h-[40px] md:w-[49px] md:h-[49px]"
        />

        <p className="text-sm sm:text-base md:text-lg font-medium">
          Are you a software developer in Ethiopia?
        </p>

        <Button className="bg-[#8967B3] mt-2 md:mt-0">Sign up</Button>
      </div>
    </section>
  );
};

export default DeveloperCTA;
