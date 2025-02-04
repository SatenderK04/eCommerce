import React from "react";
import "../css/TopNav.css";
import { useState } from "react";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../assets/images/Mainlogo.png";
// import { currentUser } from "./Auth";
import { useLocation } from "react-router-dom";

const TopNav = ({ handleLogOut }) => {
  const location = useLocation();
  const [showProfileOpt, setShowProfileOpt] = useState(false);

  const currentUser = location.state?.currentUser;
  return (
    <>
      {console.log(currentUser)}
      <div className="top-nav">
        <a href="#">
          <img src={logo} id="logo-image" alt="Main Logo" />
        </a>
        <div className="searchBar">
          <input type="text" placeholder="Shoes, Shirts ..." />
          <a href="#">
            <AiOutlineSearch size={30} />
          </a>
        </div>
        <div className="right-nav-items">
          <ul className="nav-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <div className="links-logo">
            <a href="#" className="favourites">
              <FaHeart size={20} />
            </a>
            <a href="#" className="cart">
              <p className="cart-items-cnt">20</p>
              <FaShoppingCart size={20} />
            </a>
            <a href="#" className="user">
              <FaUser size={20} />
            </a>
            <div
              className="profile-container"
              onMouseEnter={() => setShowProfileOpt(true)}
              onMouseLeave={() => setShowProfileOpt(false)}
            >
              <p className="profile">{currentUser}</p>

              {showProfileOpt && (
                <div className="profile-menu">
                  <ul>
                    <li className="profile-options">Shoes</li>
                    <li className="profile-options">Pants</li>
                    <li className="profile-options">Electronics</li>
                    <li className="profile-options">Jewellery</li>
                    <li className="profile-options">Garments</li>
                    <li className="profile-options">Community</li>
                    <li className="logout" onClick={handleLogOut}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
