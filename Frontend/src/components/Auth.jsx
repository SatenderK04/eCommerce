import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";
import axios from "axios";
import { MdOutlineArrowBack } from "react-icons/md";

const Auth = () => {
  const [role, setRole] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(""); // Clear message after 3s
      }, 3000);

      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, [errorMessage]);

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
        userData,
        { withCredentials: true } // necessary to send cookies
      );
      console.log("Signup successful:", response.data.user);
      // setCurrentUser(response.data.user);

      // navigate("/home", {
      //   state: { currentUser: response.data.user.username },
      // });
      if (
        response.data.user.role === "seller" ||
        response.data.user.role === "Seller"
      ) {
        navigate("/seller", {
          state: { currentUser: response.data.user },
        });
      } else {
        navigate("/home", {
          state: { currentUser: response.data.user },
        });
      }
    } catch (error) {
      console.error(
        "Signup error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password,
      role: role,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        loginData,
        { withCredentials: true }
      );
      console.log("User logged In", response.data.user);
      // setCurrentUser(response.data.user);
      if (
        response.data.user.role === "seller" ||
        response.data.user.role === "Seller"
      ) {
        navigate("/seller", {
          state: {
            currentUser: response.data.user,
          },
        });
      } else {
        navigate("/home", {
          state: { currentUser: response.data.user },
        });
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong! Please try again.", error);
      }
    }
  };

  return (
    <>
      <div className="auth-container">
        {!role ? (
          <div className="role-selection">
            <span>
              <br /> Please select your role to continue
            </span>
            <button onClick={() => setRole("Seller")} className="role-btn">
              Seller
            </button>
            <button onClick={() => setRole("Buyer")} className="role-btn">
              Buyer
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
              {errorMessage && <p className="error-message">{errorMessage}</p>}
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
