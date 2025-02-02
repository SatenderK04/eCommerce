import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";
import { MdOutlineArrowBack } from "react-icons/md";
import axios from "axios";

const Auth = () => {
  const [role, setRole] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRoleToggle = () => {
    setRole(null);
  };

  const handleSignup = async () => {
    const userData = {
      username: username,
      email: email,
      password: password,
      role: role,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/users/signup",
        userData
      );
      console.log("Signup successful:", response.data);
      navigate("/home");
    } catch (error) {
      console.error(
        "Signup error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleLogin = () => {
    console.log("login");
  };

  return (
    <>
      <div className="auth-container">
        {!role ? (
          <div className="role-selection">
            <span>
              <br /> Please select your role to continue
            </span>
            <button onClick={() => setRole("Admin")} className="role-btn">
              Admin
            </button>
            <button onClick={() => setRole("User")} className="role-btn">
              User
            </button>
          </div>
        ) : (
          <>
            <button className="back-btn">
              <MdOutlineArrowBack
                className="arrow"
                onClick={handleRoleToggle}
              />
            </button>
            <div className="auth-box">
              <h2>
                {isLogin ? "Login" : "Sign Up"} as {role}
              </h2>
              <input
                type="email"
                placeholder="Email"
                className="auth-input"
                onChange={(e) => {
                  //   console.log(e.target.value);
                  setEmail(e.target.value);
                  //   console.log(email);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Username"
                  className="auth-input"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              )}
              {isLogin ? (
                <button className="auth-btn" onClick={handleLogin}>
                  Login
                </button>
              ) : (
                <button className="auth-btn" onClick={handleSignup}>
                  Sign Up
                </button>
              )}
              <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Auth;
