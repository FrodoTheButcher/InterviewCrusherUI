import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/LoginContext";
import { useNavigate } from "react-router-dom";
const LoginSignUp = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="signUp-container">
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ padding: "1.2rem" }}>New Here?</h2>
        <h5 style={{ padding: "0.8rem" }}>
          Sign Up Today And Join Out Growing Community
        </h5>
        <Button
          onClick={() => navigate("/login/signUp")}
          variant="primary"
          className="signUp-btn"
          style={{
            backgroundColor: "white",
            color: "black",
            fontSize: "1.3rem",
            fontWeight: "600",
            borderColor: "white",
            textDecoration: "none",
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default LoginSignUp;
