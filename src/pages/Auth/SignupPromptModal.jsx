import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import { useNavigate } from "react-router-dom";

export default function SignupPromptModal({
  isOpen,
  onClose,
  message = "Please register or login as a client to post jobs.",
}) {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center space-y-6">
        <p className="text-[#000000] text-[29px] text-center tracking-0 font-kantumruy font-medium mb-[56px] tracking-0">
          {message}
        </p>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => navigate("/signup/company")}
            className="px-6 py-2 rounded-[11px] bg-[#8967B3] text-white"
          >
            Sign up
          </Button>

          <Button
            onClick={() => navigate("/login")}
            className="!text-[#000000] px-6 py-2 rounded-[11px] border-[4px] border-[#8967B3]"
          >
            Log in
          </Button>
        </div>
      </div>
    </Modal>
  );
}
