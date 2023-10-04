import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUpHeader = (progressParam) => {
  const [progress, setProgress] = useState(progressParam);

  const navigate = useNavigate();

  useEffect(() => {
    setProgress(progressParam);
  }, [progressParam]);

  return (
    <div className="signUpHeader">
      <h3 className="signUpHeaderText">Sign Up</h3>
      {!progress && (
        <Button
          variant="primary"
          onClick={() => navigate("/login")}
          style={{
            width: "7rem",
          }}
        >
          <h3 className="signUpHeaderText">Login</h3>
        </Button>
      )}
    </div>
  );
};

export default SignUpHeader;
