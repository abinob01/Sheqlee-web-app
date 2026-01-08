import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function FreelancerLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("authUser"));

    // 🔐 Protect freelancer routes
    if (!user || user.role !== "professional") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
