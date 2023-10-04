import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";

const SignUpUserData = (progressParam, setProgressParam) => {
  const [progress, setProgress] = useState(0);
  const [value, setValue] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleIncrease = (e) => {
    e.preventDefault();
    setProgressParam((prev) => prev + 1);
  };

  useEffect(() => {
    setProgress(progressParam);
  }, [progressParam]);

  return (
    <div>
      <Form className="signUpForm">
        {/* <div style={{display:progress === 2 ? '' : 'none'}}>
                <h4 style={{fontFamily:'verdana', fontSize:'1rem', fontWeight:'600', color:"#909191"}}>Education</h4>
                <Form.Group className="mb-3" controlId="formBasicTextFirst" style={{paddingBottom:"1rem"}}>
                    <Form.Control type="text"/>
                </Form.Group>
            </div> */}
        <div>
          <h4
            style={{
              fontFamily: "verdana",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#909191",
            }}
          >
            {progress === 0
              ? "Email"
              : progress === 1
              ? "Contact"
              : "Job Title"}
          </h4>
          <Form.Group
            className="mb-3"
            controlId="formBasicText"
            style={{ paddingBottom: "1rem" }}
          >
            <Form.Control
              onChange={(e) =>
                progress === 0 &&
                setValue((prev) => ({ ...prev, email: e.target.value }))
              }
              type={progress === 0 ? "email" : "text"}
            />
          </Form.Group>
        </div>
        <div>
          <h4
            style={{
              fontFamily: "verdana",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#909191",
            }}
          >
            {progress === 0
              ? "Password"
              : progress === 1
              ? "Location"
              : "Years of Experience"}
          </h4>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ paddingBottom: "1rem" }}
          >
            <Form.Control
              //   value={progress === 0 && value.password}
              onChange={(e) =>
                progress === 0 &&
                setValue((prev) => ({
                  ...prev,
                  password: e.target.value,
                  password2: e.target.value,
                }))
              }
              type={progress === 0 ? "password" : "text"}
            />
          </Form.Group>
        </div>
        <p
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontFamily: "sans-serif",
            color: "#A6A5A5",
            display: progress > 0 ? "none" : "",
          }}
        >
          Must be 8 or more characters and contain at least 1 number and 1
          special character
        </p>
        {progress < 2 && (
          <Button
            variant="primary"
            type="button"
            className="signUpBtn"
            onClick={(e) => handleIncrease(e)}
          >
            Next
          </Button>
        )}
        {progress === 2 && (
          <Button
            variant="primary"
            type="button"
            className="signUpBtn"
            onClick={(e) => {
              e.preventDefault();
              console.log("submit");
            }}
          >
            Sign Up
          </Button>
        )}
      </Form>
    </div>
  );
};

export default SignUpUserData;
