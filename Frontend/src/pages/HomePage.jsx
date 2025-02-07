import React, { useEffect, useState } from "react";
import TopNav from "../components/buyer/TopNav";
import Sliders from "../components/buyer/Sliders";
import axios from "axios";
import Footer from "../components/buyer/Footer";
import { useNavigate } from "react-router-dom";
import Categories from "../components/buyer/Categories";
import Products from "../components/buyer/Products";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get(`http://localhost:3000/products`, {
        withCredentials: true,
      });
      setProducts(response.data.products);
      console.log("products", response.data.products);
    };
    getAllProducts();
  }, []);
  return (
    <>
      <div className="content">
        <TopNav handleLogOut={handleLogout} />
        <Sliders />
        <Categories />
        <Products
          products={products}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
