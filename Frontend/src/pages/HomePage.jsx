import React from "react";
import TopNav from "../components/buyer/TopNav";
import Sliders from "../components/buyer/Sliders";
import Products from "../components/buyer/Products";
import axios from "axios";
import Footer from "../components/buyer/Footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const handleLogout = async () => {
    console.log("Logged OUT");
    try {
      await axios.post("http://localhost:3000/users/logout", {
        withCredentials: true,
      });
      navigate("/"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <TopNav handleLogOut={handleLogout} />
      <Sliders />
      <Products />
      <Footer />
    </>
  );
};

export default HomePage;
