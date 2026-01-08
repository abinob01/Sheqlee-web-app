import { useRef, useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import RichTextEditor from "../../components/ui/RichTextEditor";

import buildingIcon from "../../assets/images/company.png";
import blackIconedit from "../../assets/icons/blackIconedit.svg";

import { CURRENT_COMPANY } from "../../utils/companies.data";

export default function CompanyProfile() {
  // TEMP: assume first company = logged-in company

  const company = CURRENT_COMPANY;

  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: company.name,
    domain: company.website.replace("https://", ""),
    description: company.description || "",
    size: company.size,
    location: company.location,
    logo: company.icon,
  });

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleLogoClick = () => {
    fileInputRef.current.click();
  };

  const handleLogoUpload = (e) => {
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
        logo: URL.createObjectURL(file),
      }));
    };

    img.src = URL.createObjectURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UPDATED COMPANY PROFILE:", form);
    alert("Profile updated (frontend only)");
  };

  return (
    <>
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[{ label: "Sheqlee", to: "/" }, { label: "Company profile" }]}
      />

      <section className="px-4 sm:px-6 py-12 max-w-[1100px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <img
            src={buildingIcon}
            alt="Company"
            className="w-14 h-14 mx-auto mb-4"
          />

          <h1 className="text-3xl font-semibold mb-2">Company Profile</h1>

          <p className="text-gray-600 max-w-[520px] text-center mx-auto">
            Provide accurate information about your company to make yourself
            discoverable.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* NAME + DOMAIN + AVATAR */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_140px] gap-6 items-start">
            {/* COMPANY NAME */}
            <div>
              <label className="text-sm font-medium">
                Company name <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 flex bg-[#E5E5E5] rounded-lg overflow-hidden h-[48px]">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="flex-1 px-3 bg-transparent outline-none text-sm"
                />
                <button type="button" className="px-3">
                  <img src={blackIconedit} className="w-4 h-4 opacity-70" />
                </button>
              </div>
            </div>

            {/* DOMAIN */}
            <div>
              <label className="text-sm font-medium">
                Domain <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 flex bg-[#E5E5E5] rounded-lg overflow-hidden h-[48px]">
                <span className="px-3 flex items-center text-sm text-gray-500">
                  https://
                </span>
                <input
                  name="domain"
                  value={form.domain}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none text-sm"
                />
                <button type="button" className="px-3">
                  <img src={blackIconedit} className="w-4 h-4 opacity-70" />
                </button>
              </div>
            </div>

            {/* AVATAR */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src={form.logo}
                  alt="Company logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                type="button"
                onClick={handleLogoClick}
                className="bg-[#8967B3] text-white text-xs px-4 py-1 rounded-md"
              >
                Upload
              </button>

              <p className="text-[10px] text-gray-400">2MB Max | 1:1 Ratio</p>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleLogoUpload}
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <RichTextEditor
            label="Description"
            placeholder="A brief description about your company..."
            value={form.description}
            maxLength={256}
            showCounter
            onChange={(val) => setForm((p) => ({ ...p, description: val }))}
          />

          {/* SIZE + LOCATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SIZE */}
            <div>
              <label className="text-sm font-medium">
                Company size <span className="text-red-500">*</span>
              </label>
              <select
                name="size"
                value={form.size}
                onChange={handleChange}
                className="mt-2 w-full h-[48px] bg-[#E5E5E5] rounded-lg px-3 text-sm outline-none"
              >
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
                <option>200</option>
                <option>500</option>
                <option>1000</option>
              </select>
            </div>

            {/* LOCATION */}
            <div>
              <label className="text-sm font-medium">
                HQ location <span className="text-red-500">*</span>
              </label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="mt-2 w-full h-[48px] bg-[#E5E5E5] rounded-lg px-3 text-sm outline-none"
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
    </>
  );
}
