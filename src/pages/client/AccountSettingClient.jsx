import { useRef, useState } from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";

import settingsIcon from "../../assets/icons/settingsIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
import eyeIcon from "../../assets/icons/eyeIcon.svg";
import { useAccount } from "../../context/connectorSignup_Acoount";

export default function AccountSettingClient() {
  // ================= MOCKED USER DATA (replace later with API/store) =================
  const { account, updateAccount } = useAccount();

  const [form, setForm] = useState({
    fullName: account.fullName,
    email: account.email,
    password: "",
    confirmPassword: "",
    deleteReason: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const PASSWORD_UNCHANGED = !form.password && !form.confirmPassword;

  const passwordsMatch =
    PASSWORD_UNCHANGED || form.password === form.confirmPassword;

  const deleteLimit = 128;

  const handleUpdate = () => {
    // required fields
    if (!form.fullName.trim() || !form.email.trim()) return;

    // if password fields are used, they must match
    if (form.password || form.confirmPassword) {
      if (!passwordsMatch) return;
    }

    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      ...(form.password ? { password: form.password } : {}),
    };

    updateAccount(payload);

    console.log("UPDATE SETTINGS", payload);
  };

  const handleDelete = () => {
    if (!form.deleteReason.trim()) return;
    console.log("DELETE ACCOUNT:", form.deleteReason);
  };

  return (
    <>
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[
          { label: "Sheqlee", to: "/" },
          { label: "Dashboard", to: "/dashboard" },
          { label: "Account Setting" },
        ]}
      />

      <section className="px-4 sm:px-6 py-10">
        <div className="max-w-3xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-10">
            <img src={settingsIcon} alt="" className="w-10 h-10 mb-3" />
            <h1 className="text-2xl sm:text-3xl font-bold">Account Setting</h1>
            <p className="text-sm text-gray-500 mt-2 max-w-md">
              Edit your account settings to make your account more secure.
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-10">
            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* FULL NAME */}
              <div>
                <label className="text-sm font-medium">
                  Full name <span className="text-red-500">*</span>
                </label>
                <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={userIcon} className="w-4 h-4" />
                  </div>
                  <input
                    ref={nameRef}
                    value={form.fullName}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, fullName: e.target.value }))
                    }
                    className="w-full px-3 bg-transparent outline-none text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => nameRef.current?.focus()}
                    className="px-3 opacity-60"
                  >
                    ✎
                  </button>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={emailIcon} className="w-4 h-4" />
                  </div>
                  <input
                    ref={emailRef}
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full px-3 bg-transparent outline-none text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => emailRef.current?.focus()}
                    className="px-3 opacity-60"
                  >
                    ✎
                  </button>
                </div>
              </div>
            </div>

            {/* PASSWORD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Password</label>
                <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={lockIcon} className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, password: e.target.value }))
                    }
                    className="w-full px-3 bg-transparent outline-none text-sm"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-3"
                  >
                    <img src={eyeIcon} className="w-4 h-4 opacity-70" />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Confirm password</label>
                <div className="flex mt-2 bg-[#E5E5E5] rounded-lg overflow-hidden h-[52px]">
                  <div className="bg-black w-12 flex items-center justify-center">
                    <img src={lockIcon} className="w-4 h-4" />
                  </div>
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        confirmPassword: e.target.value,
                      }))
                    }
                    className="w-full px-3 bg-transparent outline-none text-sm"
                  />
                  <button
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="px-3"
                  >
                    <img src={eyeIcon} className="w-4 h-4 opacity-70" />
                  </button>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              Leave this empty if you don't want to change your password.
            </p>

            <div className="flex justify-end">
              <button
                onClick={handleUpdate}
                disabled={!passwordsMatch}
                className="bg-[#8967B3] text-white px-6 py-2 rounded-lg text-sm"
              >
                Update setting
              </button>
            </div>

            {/* DIVIDER */}
            <div className="border-t pt-8">
              <h2 className="font-semibold mb-2">Account deletion</h2>
              <p className="text-sm text-gray-500 mb-4">
                Please note that your account will be available for recovery for
                one month after deletion. After that, it will be permanently
                deleted and cannot be recovered.
              </p>

              <label className="text-sm font-medium">
                Deletion reason <span className="text-red-500">*</span>
              </label>

              <div className="relative mt-2">
                <textarea
                  maxLength={deleteLimit}
                  value={form.deleteReason}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      deleteReason: e.target.value,
                    }))
                  }
                  placeholder="Why are you deleting your account..."
                  className="w-full min-h-[120px] bg-[#E5E5E5] rounded-lg p-3 text-sm outline-none resize-none"
                />
                <span className="absolute bottom-2 right-3 text-xs text-gray-400">
                  {form.deleteReason.length}/{deleteLimit}
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Giving us accurate reason for your deletion will help us make
                Sheqlee better. We hope to see you back soon. Thank you.
              </p>

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm"
                >
                  Delete account
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              <span className="text-red-500">*</span> fields are required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
