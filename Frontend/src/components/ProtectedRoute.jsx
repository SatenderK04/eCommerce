import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3000/users/me", {
          withCredentials: true,
        });
      } catch (error) {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  return children;
};

export default ProtectedRoute;
