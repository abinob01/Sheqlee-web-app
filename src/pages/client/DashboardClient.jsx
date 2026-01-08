// import { Link } from "react-router-dom";
// import Breadcrumb from "../../components/ui/Breadcrumb";

// import dashboardIcon from "../../assets/icons/dashboardIcon.svg";

// export default function DashboardClient() {
//   return (
//     <>
//       {/* BREADCRUMB */}
//       <Breadcrumb
//         items={[{ label: "Sheqlee", to: "/" }, { label: "Dashboard" }]}
//       />

//       <section className="px-4 sm:px-6 py-16 max-w-[900px] mx-auto">
//         {/* CONTENT */}
//         <div className="flex flex-col items-center text-center">
//           {/* ICON */}
//           <img src={dashboardIcon} alt="Dashboard" className="w-16 h-16 mb-6" />

//           {/* TITLE */}
//           <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Dashboard</h1>

//           {/* DESCRIPTION */}
//           <p className="text-gray-600 text-base sm:text-lg max-w-[420px] mb-8">
//             You have not posted any jobs yet. Get started by posting a job.
//           </p>

//           {/* DESKTOP & TABLET BUTTON */}
//           <Link
//             to="/post-job"
//             className="
//               hidden
//               sm:inline-flex
//               items-center
//               justify-center
//               bg-[#8967B3]
//               text-white
//               px-8
//               h-[48px]
//               rounded-lg
//               font-medium
//               hover:bg-[#7A5AA3]
//               transition
//             "
//           >
//             Post your first job
//           </Link>

//           {/* MOBILE MESSAGE */}
//           <p className="sm:hidden text-gray-500 text-sm mt-2">
//             You can only post jobs on desktop.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Breadcrumb from "../../components/ui/Breadcrumb";

// export default function DashboardClient() {
//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       title: "Senior mobile app developer",
//       type: "Full-time",
//       level: "Senior",
//       published: false,
//       viewing: false,
//     },
//     {
//       id: 2,
//       title: "Python backend developer",
//       type: "Part-time",
//       level: "Lead",
//       published: true,
//       viewing: false,
//     },
//     {
//       id: 3,
//       title: "ReactJS developer",
//       type: "Part-time",
//       level: "Middle",
//       published: false,
//       viewing: false,
//     },
//   ]);

//   /* ---------- ACTION HANDLERS ---------- */

//   const togglePublish = (id) => {
//     setJobs((prev) =>
//       prev.map((job) =>
//         job.id === id ? { ...job, published: !job.published } : job
//       )
//     );
//   };

//   const deleteJob = (id) => {
//     setJobs((prev) => prev.filter((job) => job.id !== id));
//   };

//   const duplicateJob = (job) => {
//     setJobs((prev) => [
//       ...prev,
//       {
//         ...job,
//         id: prev.length + 1,
//         published: false,
//         viewing: false,
//       },
//     ]);
//   };

//   const toggleView = (id) => {
//     setJobs((prev) =>
//       prev.map((job) =>
//         job.id === id ? { ...job, viewing: !job.viewing } : job
//       )
//     );
//   };

//   return (
//     <>
//       {/* BREADCRUMB */}
//       <Breadcrumb
//         items={[{ label: "Sheqlee", to: "/" }, { label: "Dashboard" }]}
//       />

//       <section className="px-4 py-10 max-w-[1100px] mx-auto">
//         {/* HEADER */}
//         <div className="text-center mb-10">
//           <DashboardIcon />
//           <h1 className="text-3xl font-semibold mt-4">Dashboard</h1>
//           <p className="text-gray-600 mt-2">
//             All the jobs you have posted and <br className="sm:hidden" />
//             are about to post.
//           </p>
//         </div>

//         {/* DESKTOP TABLE */}
//         <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
//           <table className="w-full text-sm">
//             <thead className="bg-[#E6E6E6] text-left">
//               <tr>
//                 <th className="px-4 py-3">JID</th>
//                 <th className="px-4 py-3">Title</th>
//                 <th className="px-4 py-3">Type</th>
//                 <th className="px-4 py-3">Level</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {jobs.map((job) => (
//                 <tr key={job.id} className="border-t">
//                   <td className="px-4 py-3">{job.id}</td>
//                   <td className="px-4 py-3">{job.title}</td>
//                   <td className="px-4 py-3">{job.type}</td>
//                   <td className="px-4 py-3">{job.level}</td>

//                   {/* STATUS */}
//                   <td className="px-4 py-3">
//                     <Toggle
//                       active={job.published}
//                       onClick={() => togglePublish(job.id)}
//                     />
//                   </td>

//                   {/* ACTIONS */}
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-2">
//                       {!job.viewing ? (
//                         <>
//                           <IconBtn
//                             title="View details"
//                             onClick={() => toggleView(job.id)}
//                           >
//                             👁
//                           </IconBtn>
//                           <IconBtn
//                             title="Duplicate vacancy"
//                             onClick={() => duplicateJob(job)}
//                           >
//                             📄
//                           </IconBtn>
//                           <IconBtn
//                             title="Delete draft"
//                             onClick={() => deleteJob(job.id)}
//                           >
//                             🗑
//                           </IconBtn>
//                         </>
//                       ) : (
//                         <>
//                           <Link
//                             to="/post-job"
//                             className="px-3 py-1 rounded bg-purple-100 text-purple-700 text-xs"
//                           >
//                             Edit
//                           </Link>
//                           <button
//                             onClick={() => togglePublish(job.id)}
//                             className="px-3 py-1 rounded bg-black text-white text-xs"
//                           >
//                             Publish
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* MOBILE TABLE */}
//         <div className="md:hidden bg-white rounded-xl shadow-sm overflow-hidden">
//           <table className="w-full text-sm">
//             <thead className="bg-[#E6E6E6]">
//               <tr>
//                 <th className="px-4 py-3">JID</th>
//                 <th className="px-4 py-3">Job post</th>
//                 <th className="px-4 py-3">Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {jobs.map((job) => (
//                 <tr key={job.id} className="border-t">
//                   <td className="px-4 py-3">{job.id}</td>

//                   <td className="px-4 py-3">
//                     <p className="font-medium">{job.title}</p>
//                     <p className="text-xs text-gray-500">
//                       {job.type} · {job.level}
//                     </p>
//                   </td>

//                   <td className="px-4 py-3">
//                     <Toggle
//                       active={job.published}
//                       onClick={() => togglePublish(job.id)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ----------------- UI HELPERS ----------------- */

// function Toggle({ active, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-10 h-5 rounded-full relative transition ${
//         active ? "bg-green-500" : "bg-gray-300"
//       }`}
//     >
//       <span
//         className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition ${
//           active ? "left-5" : "left-1"
//         }`}
//       />
//     </button>
//   );
// }

// function IconBtn({ children, onClick, title }) {
//   return (
//     <button
//       onClick={onClick}
//       title={title}
//       className="w-8 h-8 flex items-center justify-center rounded bg-purple-100 hover:bg-purple-200 text-sm"
//     >
//       {children}
//     </button>
//   );
// }

// function DashboardIcon() {
//   return (
//     <div className="flex justify-center">
//       <div className="grid grid-cols-2 gap-1 text-purple-500">
//         <span className="w-4 h-4 border-2 border-purple-400 rounded"></span>
//         <span className="w-4 h-4 border-2 border-purple-400 rounded"></span>
//         <span className="w-4 h-4 border-2 border-purple-400 rounded"></span>
//         <span className="w-4 h-4 border-2 border-purple-400 rounded"></span>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";
import dashboardIcon from "../../assets/icons/dashboardIcon.svg";

export default function DashboardClient() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior mobile app developer",
      type: "Full-time",
      level: "Senior",
      published: false,
      viewing: false,
    },
    {
      id: 2,
      title: "Python backend developer",
      type: "Part-time",
      level: "Lead",
      published: true,
      viewing: false,
    },
    {
      id: 3,
      title: "ReactJS developer",
      type: "Part-time",
      level: "Middle",
      published: false,
      viewing: false,
    },
  ]);

  /* ---------- ACTION HANDLERS ---------- */

  const togglePublish = (id) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, published: !job.published } : job
      )
    );
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const duplicateJob = (job) => {
    setJobs((prev) => [
      ...prev,
      {
        ...job,
        id: prev.length + 1,
        published: false,
        viewing: false,
      },
    ]);
  };

  const toggleView = (id) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, viewing: !job.viewing } : job
      )
    );
  };

  return (
    <>
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Dashboard" }]}
      />

      {/* ================= EMPTY STATE ================= */}
      {jobs.length === 0 && (
        <section className="px-4 sm:px-6 py-16 max-w-[900px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <img
              src={dashboardIcon}
              alt="Dashboard"
              className="w-16 h-16 mb-6"
            />

            <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
              Dashboard
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-[420px] mb-8">
              You have not posted any jobs yet. Get started by posting a job.
            </p>

            {/* DESKTOP & TABLET */}
            <Link
              to="/post-job"
              className="hidden sm:inline-flex items-center justify-center bg-[#8967B3] text-white px-8 h-[48px] rounded-lg font-medium hover:bg-[#7A5AA3] transition"
            >
              Post your first job
            </Link>

            {/* MOBILE */}
            <p className="sm:hidden text-gray-500 text-sm mt-2">
              You can only post jobs on desktop.
            </p>
          </div>
        </section>
      )}

      {/* ================= JOBS DASHBOARD ================= */}
      {jobs.length > 0 && (
        <section className="px-4 py-10 max-w-[1100px] mx-auto">
          {/* HEADER */}
          <div className="text-center mb-10">
            <DashboardIcon />
            <h1 className="text-3xl font-semibold mt-4">Dashboard</h1>
            <p className="text-gray-600 mt-2">
              All the jobs you have posted and <br className="sm:hidden" />
              are about to post.
            </p>
          </div>

          {/* -------- DESKTOP TABLE -------- */}
          <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#E6E6E6] text-left">
                <tr>
                  <th className="px-4 py-3">JID</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-t">
                    <td className="px-4 py-3">{job.id}</td>
                    <td className="px-4 py-3">{job.title}</td>
                    <td className="px-4 py-3">{job.type}</td>
                    <td className="px-4 py-3">{job.level}</td>

                    <td className="px-4 py-3">
                      <Toggle
                        active={job.published}
                        onClick={() => togglePublish(job.id)}
                      />
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {!job.viewing ? (
                          <>
                            <IconBtn
                              title="View details"
                              onClick={() => toggleView(job.id)}
                            >
                              👁
                            </IconBtn>

                            <IconBtn
                              title="Duplicate job"
                              onClick={() => duplicateJob(job)}
                            >
                              📄
                            </IconBtn>

                            <IconBtn
                              title="Delete job"
                              onClick={() => deleteJob(job.id)}
                            >
                              🗑
                            </IconBtn>
                          </>
                        ) : (
                          <>
                            <Link
                              to="/post-job"
                              className="px-3 py-1 rounded bg-purple-100 text-purple-700 text-xs"
                            >
                              Edit
                            </Link>

                            <button
                              onClick={() => togglePublish(job.id)}
                              className="px-3 py-1 rounded bg-black text-white text-xs"
                            >
                              Publish
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* -------- MOBILE TABLE -------- */}
          <div className="md:hidden bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#E6E6E6]">
                <tr>
                  <th className="px-4 py-3">JID</th>
                  <th className="px-4 py-3">Job post</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-t">
                    <td className="px-4 py-3">{job.id}</td>

                    <td className="px-4 py-3">
                      <p className="font-medium">{job.title}</p>
                      <p className="text-xs text-gray-500">
                        {job.type} · {job.level}
                      </p>
                    </td>

                    <td className="px-4 py-3">
                      <Toggle
                        active={job.published}
                        onClick={() => togglePublish(job.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
}

/* ---------------- UI HELPERS ---------------- */

function Toggle({ active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-5 rounded-full relative transition ${
        active ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition ${
          active ? "left-5" : "left-1"
        }`}
      />
    </button>
  );
}

function IconBtn({ children, onClick, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="w-8 h-8 flex items-center justify-center rounded bg-purple-100 hover:bg-purple-200 text-sm"
    >
      {children}
    </button>
  );
}

function DashboardIcon() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-1 text-purple-500">
        <span className="w-4 h-4 border-2 border-purple-400 rounded" />
        <span className="w-4 h-4 border-2 border-purple-400 rounded" />
        <span className="w-4 h-4 border-2 border-purple-400 rounded" />
        <span className="w-4 h-4 border-2 border-purple-400 rounded" />
      </div>
    </div>
  );
}
