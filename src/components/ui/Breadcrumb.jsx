import placeholder from "../../assets/icons/placeholder.svg";
import rightPositionArrow from "../../assets/icons/rightPositionArrow.svg";
import { Link } from "react-router-dom";

export default function Breadcrumb({ sectionLabel, sectionTo, current }) {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="flex items-center gap-2 max-w-7xl pl-[7.8rem] py-[19px] text-[#000000]">
        <img src={placeholder} className="w-[15px] h-[23px]" />

        <span className="text-[19px]">Sheqlee</span>

        <img src={rightPositionArrow} className="w-[5px]" />

        <Link to={sectionTo} className="text-[19px]">
          {sectionLabel}
        </Link>

        <img src={rightPositionArrow} className="w-[5px]" />

        <span className="text-[19px] font-medium">{current}</span>
      </div>
    </div>
  );
}
