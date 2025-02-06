import React, { useEffect, useState } from "react";
import "../../css/seller/ProfileSetting.css";
import img from "../../assets/images/Profile.jpg";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProfileSetting = () => {
  const location = useLocation();
  const currentUser = location.state?.currentUser;

  return (
    <div className="profile-setting-container">
      {/* {console.log(currentUser.id)} */}
      <div className="profile-image-container">
        <div className="profile-image">
          <img src={img} alt="Profile Picture" />
        </div>
      </div>
      <div className="settings">
        <h2>{currentUser.username}</h2>
        <li className="first">Edit Information</li>
        <li>Update Bank Details</li>
        <li>Change Password </li>
        <li>Security Settings</li>
        {/* <li>{id}</li> */}
      </div>
    </div>
  );
};

export default ProfileSetting;
