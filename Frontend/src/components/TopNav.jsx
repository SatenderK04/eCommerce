import React from "react";
import "../css/TopNav.css";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const TopNav = () => {
  return (
    <>
      <div className="top-nav">
        <span className="logo">
          <a href="#">
            <img
              src="../assets/images/Mainlogo.png"
              id="logo-image"
              alt="Main Logo"
            />
          </a>
        </span>
        <div className="searchBar">
          <input type="text" placeholder=" Shoes, Shirts ..." />
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
              <FaShoppingCart size={20} />
            </a>
            <a href="#" className="user">
              <FaUser size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
