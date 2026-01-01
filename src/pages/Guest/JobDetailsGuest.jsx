import { Link, useParams } from "react-router-dom";
import { JOBS } from "../../utils/mockJobs";
import Breadcrumb from "../../components/ui/Breadcrumb";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import Footer from "../../components/layout/Footer";
import blackFacebook from "../../assets/icons/blackFacebook.svg";
import blackTwitter from "../../assets/icons/blackTwitter.svg";
import blackTelegram from "../../assets/icons/blackTelegram.svg";
import blackLinkedin from "../../assets/icons/blackLinkedin.svg";
import IconAwesomeTags from "../../assets/icons/IconAwesomeTags.svg";

export default function JobDetailsGuest() {
  const cssheadings =
    "my-6 font-kantumruy font-semibold text-[#000000] text-[23px]";
  const { id } = useParams();
  const job = JOBS.find((j) => String(j.id) === id);

  if (!job) {
    return <p className="text-center mt-20">Job not found</p>;
  }

  return (
    <div className="min-h-screen">
      <Breadcrumb
        sectionLabel="All Jobs"
        sectionTo="/jobs"
        current={job.title}
      />

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 ">
            {job.icon && (
              <img
                src={job.icon}
                alt={job.title}
                className="w-[53px] h-[55px]"
              />
            )}

            <h1 className="text-[43px] text-[#000000] tracking-0 font-kantumruy font-semibold">
              {job.title}
            </h1>
          </div>

          <div className="flex justify-center gap-3 mt-[30px] flex-wrap mb-[35px]">
            <Badge>{job.type}</Badge>
            <Badge>{job.level}</Badge>
            <Badge>{job.salary}</Badge>
            <Badge>{job.company}</Badge>
          </div>

          <button className="mt-6 w-[260px] h-[55px] bg-[#8967B3] text-white rounded-xl text-lg font-semibold">
            Apply now
          </button>

          <p className="text-[15px] font-kantumruy text-[#000000] tracking-0 mt-[12px]">
            Please mention{" "}
            <span className="text-[15px] font-kantumruy font-semibold">
              Sheqlee
            </span>{" "}
            when you apply
          </p>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-12 space-y-10 text-sm p-[60px] text-[#000000] bg-[#F7F7F7]">
          <Section>{job.description}</Section>

          {job.qualifications?.length > 0 && (
            <Section title="Qualifications" className="cssheadings">
              <ul className="list-disc ml-6 space-y-1">
                {job.qualifications.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </Section>
          )}

          {job.experience?.length > 0 && (
            <Section title="Experience" className="cssheadings">
              <ul className="list-disc ml-6 space-y-1">
                {job.experience.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </Section>
          )}

          {job.skills?.length > 0 && (
            <Section title="Skills & Knowledge" className="cssheadings">
              <ul className="list-disc ml-6 space-y-1">
                {job.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </Section>
          )}

          {job.detailDescription?.length > 0 && (
            <Section title="Description" className="cssheadings">
              <ul className="list-disc ml-6 space-y-1">
                {job.detailDescription.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        {/* TAGS */}
        {job.tags?.length > 0 && (
          <div className="flex justify-center gap-3 mt-12 flex-wrap">
            <img
              src={IconAwesomeTags}
              alt="Awesome tags"
              className="bg-black  rounded-[4px] w-8 h-7 p-1"
            />
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-[4px] bg-[#DFDFDF] text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* APPLY + SHARE */}
        <div className="text-center mt-8">
          <button className="w-[338px] h-[62px] bg-[#8967B3] text-white rounded-xl text-lg font-semibold">
            Apply now
          </button>
          <p className="text-[15px] font-kantumruy text-[#000000] tracking-0 mt-[12px]">
            Please mention{" "}
            <span className="text-[15px] font-kantumruy font-semibold">
              Sheqlee
            </span>{" "}
            when you apply
          </p>

          <p className="mt-6 text-[17px] text-[#000000] tracking-0 font-kantumruy">
            Share with others
          </p>

          <div className="flex justify-center gap-4 mt-2 text-lg">
            <Link to="#" aria-label="Facebook">
              <img src={blackFacebook} className="w-6 h-6" alt="Facebook" />
            </Link>

            <Link to="#" aria-label="Twitter">
              <img
                src={blackTwitter}
                className="w-6 h-6 fill-transparent"
                alt="Twitter"
              />
            </Link>

            <Link to="@Read_2me" aria-label="Telegram">
              <img src={blackTelegram} className="w-6 h-6" alt="Telegram" />
            </Link>

            <Link to="#" aria-label="LinkedIn">
              <img src={blackLinkedin} className="w-6 h-6" alt="LinkedIn" />
            </Link>
          </div>
        </div>
      </div>
      <DeveloperCTA />
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="bg-[#F1F1F1] px-3 py-1 rounded-md text-xs">
      {children}
    </span>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
