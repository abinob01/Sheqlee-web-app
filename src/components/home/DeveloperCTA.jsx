import Button from "../ui/Button";
import partyCTAIcon from "../../assets/images/partyCTAIcon.png";

const DeveloperCTA = () => {
  return (
    <section className=" bg-[#DFDFDF] max-w-full  flex md:flex-row items-center">
      <div className="flex items-center gap-[38px] mx-auto p-[62px]">
        <img
          src={partyCTAIcon}
          alt="party emoji in CTA"
          className="w-[49px] h-[49px"
        />
        <p className="text-lg font-medium">
          Are you a software developer in Ethiopia?
        </p>

        <Button className="bg-[#8967B3] mt-4 md:mt-0">Sign up</Button>
      </div>
    </section>
  );
};

export default DeveloperCTA;
