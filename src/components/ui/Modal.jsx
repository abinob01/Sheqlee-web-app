import { useEffect } from "react";
import closeIcon from "../../assets/icons/close.svg";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 z-10" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-[44px] right-[65px] z-30"
        aria-label="Close modal"
      >
        <img src={closeIcon} alt="Close" className="w-8 h-8" />
      </button>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div
          className="bg-white rounded-2xl p-8 w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
