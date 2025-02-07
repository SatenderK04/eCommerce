import React from "react";
import "../../css/seller/SellerPanel.css";
import { FaBoxOpen, FaStar, FaCheckCircle } from "react-icons/fa";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaBox } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";
import { SiTask } from "react-icons/si";

const SellerPannel = ({ totalProducts }) => {
  return (
    <>
      <div className="panelContainer">
        <div className="itemContainer">
          <div className="item">
            <SiTask />
            <p className="value">{totalProducts}</p>
          </div>
          Total Products
        </div>
        <div className="itemContainer">
          <div className="item">
            <MdPendingActions />
            <p className="value">16</p>
          </div>
          Orders Received
        </div>
        <div className="itemContainer">
          <div className="item">
            <FaBoxOpen />
            <p className="value">29</p>
          </div>
          Total Sales
        </div>
        <div className="itemContainer">
          <div className="item">
            <PiClockCountdownFill />
            <p className="value">2</p>
          </div>
          Pending Orders
        </div>
        <div className="itemContainer">
          <div className="item">
            <FaBox />
            <p className="value">35</p>
          </div>
          Completed Orders
        </div>
        <div className="itemContainer">
          <div className="item">
            <FaStar />
            <p className="value">4.5</p>
          </div>
          Rating
        </div>
      </div>
    </>
  );
};

export default SellerPannel;
