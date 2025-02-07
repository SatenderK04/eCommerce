import React from "react";
import "../../css/buyer/Footer.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help & Support</h3>
          <ul>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Returns Centre</a>
            </li>
            <li>
              <a href="#">100% Purchase Protection</a>
            </li>
            <li>
              <a href="#">Amazon App Download</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Consumer Policies</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} StyleSphere. All rights reserved.
          Designed & Developed by Satender K
        </p>
      </div>
    </footer>
  );
};

export default Footer;
