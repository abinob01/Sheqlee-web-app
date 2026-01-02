import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { JOBS } from "../../utils/mockJobs";
import Breadcrumb from "../../components/ui/Breadcrumb";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import blackFacebook from "../../assets/icons/blackFacebook.svg";
import blackTwitter from "../../assets/icons/blackTwitter.svg";
import blackTelegram from "../../assets/icons/blackTelegram.svg";
import blackLinkedin from "../../assets/icons/blackLinkedin.svg";
import IconAwesomeTags from "../../assets/icons/IconAwesomeTags.svg";

export default function JobDetailsGuest() {
  const { id } = useParams();
  const job = JOBS.find((j) => String(j.id) === id);

  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      setShowReadMore(
        descRef.current.scrollHeight > descRef.current.clientHeight
      );
    }
  }, []);

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
        {/* ================= HEADER ================= */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
            {job.icon && (
              <img
                src={job.icon}
                alt={job.title}
                className="w-[53px] h-[55px]"
              />
            )}

            <h1 className="text-[28px] sm:text-[43px] font-kantumruy font-semibold">
              {job.title}
            </h1>
          </div>

          {/* Meta badges */}
          <div className="flex justify-center gap-3 mt-[30px] flex-wrap mb-[35px] max-sm:max-w-xs max-sm:mx-auto">
            <Badge>{job.type}</Badge>
            <Badge>{job.level}</Badge>
            <Badge>{job.salary}</Badge>
            <Badge>{job.company}</Badge>
          </div>

          <button className="mt-6 w-[260px] h-[55px] bg-[#8967B3] text-white rounded-xl text-lg font-semibold">
            Apply now
          </button>

          <p className="text-[15px] mt-[12px]">
            Please mention <span className="font-semibold">Sheqlee</span> when
            you apply
          </p>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mt-12 bg-[#F7F7F7] rounded-xl p-[60px] max-sm:p-4 text-sm">
          <div
            ref={descRef}
            className={`transition-all ${
              expanded
                ? ""
                : "max-sm:max-h-[180px] max-sm:overflow-hidden sm:max-h-[260px] sm:overflow-hidden lg:max-h-none lg:overflow-visible"
            }`}
          >
            <Section>{job.description}</Section>

            {job.qualifications?.length > 0 && (
              <Section title="Qualifications">
                <ul className="list-disc ml-6 space-y-1">
                  {job.qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </Section>
            )}

            {job.experience?.length > 0 && (
              <Section title="Experience">
                <ul className="list-disc ml-6 space-y-1">
                  {job.experience.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </Section>
            )}

            {job.skills?.length > 0 && (
              <Section title="Skills & Knowledge">
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

          {/* Read more (mobile + tablet only, conditional) */}
          {showReadMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-[#8967B3] font-semibold block mx-auto md:block lg:hidden"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        {/* ================= TAGS (ICON KEPT) ================= */}
        {job.tags?.length > 0 && (
          <div className="flex justify-center gap-2 mt-12 flex-wrap max-w-md mx-auto">
            <img
              src={IconAwesomeTags}
              alt="Tags"
              className="bg-black rounded-[4px] w-8 h-7 p-1"
            />

            {job.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-[4px] bg-[#DFDFDF] text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* ================= APPLY + SHARE ================= */}
        <div className="text-center mt-10">
          <button className="w-[338px] max-sm:w-full h-[62px] bg-[#8967B3] text-white rounded-xl text-lg font-semibold">
            Apply now
          </button>

          <p className="text-[15px] mt-[12px]">
            Please mention <span className="font-semibold">Sheqlee</span> when
            you apply
          </p>

          <p className="mt-6 text-[17px]">Share with others</p>

          <div className="flex justify-center gap-4 mt-2">
            <Link to="#">
              <img src={blackFacebook} className="w-6 h-6" />
            </Link>
            <Link to="#">
              <img src={blackTwitter} className="w-6 h-6" />
            </Link>
            <Link to="#">
              <img src={blackTelegram} className="w-6 h-6" />
            </Link>
            <Link to="#">
              <img src={blackLinkedin} className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <DeveloperCTA />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Badge({ children }) {
  return (
    <span className="bg-[#F1F1F1] px-3 py-1 rounded-md text-xs">
      {children}
    </span>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-6">
      {title && <h3 className="font-semibold text-lg mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
