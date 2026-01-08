import { useRef, useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import RichTextEditor from "../../components/ui/RichTextEditor";
import { useNavigate } from "react-router-dom";

import profileIcon from "../../assets/icons/edit_profile_freelancer.svg";
import blackIconedit from "../../assets/icons/blackIconedit.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";

import { useAccount } from "../../context/connectorSignup_Acoount";
import AddSkillPromptModal from "../Auth/AddSkillPromptModal";
import AddLinkPromptModal from "../Auth/AddLinkPromptModal";

export default function FreelancerProfile() {
  const [showAddLinkModal, setShowAddLinkModal] = useState(false);

  const [showAddSkillModal, setShowAddSkillModal] = useState(false);
  const [editing, setEditing] = useState({
    fullName: false,
    title: false,
  });

  const { account } = useAccount(); // from ProfessionalSignup

  const imageInputRef = useRef(null);
  const cvInputRef = useRef(null);
  const navigate = useNavigate();

  /* ---------------- STATE ---------------- */

  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("freelancerProfile");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: account?.fullName || "",
          title: account?.category || "Full-Stack Developer",
          bio: "",
          avatar: null,
          skills: [
            { name: "Java", level: 2 },
            { name: "Flutter", level: 2 },
            { name: "Golang", level: 4 },
          ],
          profiles: [
            { name: "GitHub", url: "https://github.com/mygithub" },
            { name: "LinkedIn", url: "https://linkedin.com/mylinkedin" },
          ],
          cv: null,
        };
  });

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleAddSkillFromModal = (skill) => {
    setForm((p) => ({
      ...p,
      skills: [...p.skills, skill],
    }));
  };

  const handleAddLinkFromModal = (link) => {
    setForm((p) => ({
      ...p,
      profiles: [...p.profiles, link],
    }));
  };

  /* ---------- PROFILE IMAGE ---------- */

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2MB");
      return;
    }

    const img = new Image();
    img.onload = () => {
      if (img.width !== img.height) {
        alert("Image must be 1:1 ratio");
        return;
      }

      setForm((p) => ({
        ...p,
        avatar: URL.createObjectURL(file),
      }));
    };

    img.src = URL.createObjectURL(file);
  };

  /* ---------- SKILLS ---------- */

  const updateSkillLevel = (index, level) => {
    setForm((p) => {
      const skills = [...p.skills];
      skills[index].level = level;
      return { ...p, skills };
    });
  };

  const removeSkill = (index) => {
    setForm((p) => ({
      ...p,
      skills: p.skills.filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    setForm((p) => ({
      ...p,
      skills: [...p.skills, { name: "New Skill", level: 1 }],
    }));
  };

  /* ---------- PROFILES ---------- */

  const removeProfile = (index) => {
    setForm((p) => ({
      ...p,
      profiles: p.profiles.filter((_, i) => i !== index),
    }));
  };

  const addProfile = () => {
    setForm((p) => ({
      ...p,
      profiles: [...p.profiles, { name: "Website", url: "" }],
    }));
  };

  /* ---------- CV ---------- */

  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }

    setForm((p) => ({ ...p, cv: file }));
  };

  /* ---------- SUBMIT ---------- */

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      email: account?.email || "",
    };

    localStorage.setItem("freelancerProfile", JSON.stringify(payload));

    navigate("/freelancer/profile-review");
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Profile" }]}
      />

      <section className="px-4 sm:px-6 py-12 max-w-[1100px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <img src={profileIcon} className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-3xl font-semibold mb-2">Edit Profile</h1>
          <p className="text-gray-600 max-w-[520px] mx-auto">
            The more complete your profile, the easier for companies to select
            you for jobs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* NAME + TITLE + AVATAR */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_140px] gap-6">
            {/* FULL NAME */}
            <div>
              <label className="text-sm font-medium">
                Full name <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 flex bg-[#E5E5E5] rounded-lg h-[48px]">
                <input
                  name="fullName"
                  disabled={!editing.fullName}
                  value={form.fullName}
                  onChange={handleChange}
                  className="flex-1 px-3 bg-transparent outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setEditing((p) => ({ ...p, fullName: true }))}
                  className="px-3"
                >
                  <img src={blackIconedit} className="w-4 h-4 opacity-70" />
                </button>
              </div>
            </div>

            {/* TITLE */}
            <div>
              <label className="text-sm font-medium">
                Title <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 flex bg-[#E5E5E5] rounded-lg h-[48px]">
                <input
                  name="title"
                  disabled={!editing.title}
                  value={form.title}
                  onChange={handleChange}
                  className="flex-1 px-3 bg-transparent outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setEditing((p) => ({ ...p, title: true }))}
                  className="px-3"
                >
                  <img src={blackIconedit} className="w-4 h-4 opacity-70" />
                </button>
              </div>
            </div>

            {/* AVATAR */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                {form.avatar && (
                  <img
                    src={form.avatar}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <button
                type="button"
                onClick={() => imageInputRef.current.click()}
                className="bg-[#8967B3] text-white text-xs px-4 py-1 rounded-md"
              >
                Upload
              </button>

              <p className="text-[10px] text-gray-400">2MB Max | 1:1 Ratio</p>

              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
            </div>
          </div>

          {/* BIO */}
          <RichTextEditor
            label="Introduce yourself"
            placeholder="Say something appealing about yourself..."
            value={form.bio}
            maxLength={256}
            showCounter
            onChange={(val) => setForm((p) => ({ ...p, bio: val }))}
          />

          {/* SKILLS */}
          <div>
            <h3 className="font-semibold mb-1">Your skills</h3>
            <p className="text-sm text-gray-500 mb-4">
              Adding your skills will help us make job suggestions more
              accurately.
            </p>

            <table className="w-full border-collapse rounded-lg overflow-hidden">
              {/* HEADER */}
              <thead className="bg-[#3F3F3F] text-white text-sm">
                <tr>
                  <th className="text-left px-5 py-3 font-medium">Skill</th>
                  <th className="text-right px-5 py-3 font-medium">Level</th>
                  <th className="text-right px-5 py-3 font-medium">Action</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {form.skills.map((s, i) => (
                  <tr
                    key={i}
                    className="bg-[#E5E5E5] border-b border-[#CFCFCF]"
                  >
                    {/* SKILL NAME */}
                    <td className="px-5 py-4 text-sm font-medium text-left">
                      {s.name}
                    </td>

                    {/* LEVEL */}
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => updateSkillLevel(i, n)}
                            className={`
                  w-6 h-6
                  rounded-full
                  text-xs font-semibold
                  flex items-center justify-center
                  ${
                    n <= s.level
                      ? "bg-black text-white"
                      : "bg-[#BDBDBD] text-black"
                  }
                `}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </td>

                    {/* ACTION */}
                    <td className="px-5 py-4">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeSkill(i)}
                          className="
                w-8 h-8
                rounded-md
                bg-[#8967B3]
                flex items-center justify-center
              "
                        >
                          <img
                            src={deleteIcon}
                            className="w-4 h-4"
                            alt="delete"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mt-3">
              <button
                type="button"
                onClick={() => setShowAddSkillModal(true)}
                className="bg-[#8967B3] text-white text-sm px-4 py-1 rounded-md"
              >
                Add a skill
              </button>
            </div>
          </div>

          {/* PROFILES */}
          <div>
            <h3 className="font-semibold mb-1">Your profiles</h3>
            <p className="text-sm text-gray-500 mb-4">
              Profiles could be GitHub, LinkedIn, etc.
            </p>

            <table className="w-full bg-[#E5E5E5] rounded-lg overflow-hidden">
              <thead className="bg-[#3F3F3F] text-white text-sm">
                <tr>
                  <th className="text-left px-4 py-2">Profile name</th>
                  <th className="text-left">URL</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {form.profiles.map((p, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{p.name}</td>
                    <td>{p.url}</td>
                    <td className="text-center">
                      <button type="button" onClick={() => removeProfile(i)}>
                        <img src={deleteIcon} className="w-4 h-4 mx-auto" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mt-3">
              <button
                type="button"
                onClick={() => setShowAddLinkModal(true)}
                className="bg-[#8967B3] text-white text-sm px-4 py-1 rounded-md"
              >
                Add a link
              </button>
            </div>
          </div>

          {/* CV */}
          <div>
            <h3 className="font-semibold">Your CV (*.pdf)</h3>
            <p className="text-sm text-gray-500 mb-3">
              Upload your CV to help companies know you better.
            </p>

            <div className="flex items-center gap-3">
              <div className="bg-[#E5E5E5] px-4 py-2 rounded-lg text-sm">
                {form.cv ? form.cv.name : "..."}
              </div>
              <button
                type="button"
                onClick={() => cvInputRef.current.click()}
                className="bg-[#8967B3] text-white text-sm px-4 py-2 rounded-lg"
              >
                Upload CV (.pdf)
              </button>
              <input
                ref={cvInputRef}
                type="file"
                accept="application/pdf"
                hidden
                onChange={handleCvUpload}
              />
            </div>
          </div>

          {/* ACTION */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#8967B3] text-white px-6 h-[44px] rounded-lg"
            >
              Update profile
            </button>
          </div>

          <hr />

          <p className="text-xs text-gray-500">
            <span className="text-red-500">*</span> fields are required.
          </p>
        </form>
      </section>
      <AddSkillPromptModal
        isOpen={showAddSkillModal}
        onClose={() => setShowAddSkillModal(false)}
        onAddSkill={handleAddSkillFromModal}
      />
      <AddLinkPromptModal
        isOpen={showAddLinkModal}
        onClose={() => setShowAddLinkModal(false)}
        onAddLink={handleAddLinkFromModal}
      />
    </>
  );
}
