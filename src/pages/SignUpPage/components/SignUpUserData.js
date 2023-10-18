import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../../actions/userAction";
import Loader from "../../../components/Spinner";
import Message from "../../../components/Message";
import { CustomAuthProvider, useAuth } from "../../../Context/LoginContext";
import CustomizedSnackbars from "../../../components/CustomizedSnackbars";
import { ErrorPrinter } from "../../../actions/errorPrinter";
import { Navigate, useNavigate } from "react-router-dom";

const SignUpUserData = ({ progressParam, setProgressParam }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    password2: "",
    contact: "",
    location: "",
    jobTitle: "",
    yearsOfExperience: "",
  });
  const [progress, setProgress] = useState(0);
  const [isSnackBar, setIsSnackBar] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerUser = useSelector((state) => state.userReducer);
  const { error, loading, user } = registerUser;

  const handleIncrease = (e) => {
    e.preventDefault();
    setProgressParam((prev) => prev + 1);
  };

  const handleSubmit = () => {
    dispatch(userRegisterAction(userData));
  };

  useEffect(() => {
    setProgress(progressParam);
  }, [progressParam]);

  useEffect(() => {
    if (user !== null && user !== undefined) {
      console.log("intraaa");
      login(userData.email, userData.password);
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      {loading && <Loader />}
      <Form className="signUpForm">
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
                setUserData((prev) => ({
                  ...prev,
                  [progress === 0
                    ? "email"
                    : progress === 1
                    ? "contact"
                    : "jobTitle"]: e.target.value,
                }))
              }
              name={
                progress === 0
                  ? "email"
                  : progress === 1
                  ? "contact"
                  : "jobTitle"
              }
              value={
                progress === 0
                  ? userData.email
                  : progress === 1
                  ? userData.contact
                  : userData.jobTitle
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
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  [progress === 0
                    ? "password"
                    : progress === 1
                    ? "location"
                    : "yearsOfExperience"]: e.target.value,
                }))
              }
              value={
                progress === 0
                  ? userData.password
                  : progress === 1
                  ? userData.location
                  : userData.yearsOfExperience
              }
              type={progress === 0 ? "password" : "text"}
            />
          </Form.Group>
        </div>
        <div>
          {progress === 0 && (
            <>
              <h4
                style={{
                  fontFamily: "verdana",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#909191",
                }}
              >
                Re-enter password
              </h4>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword2"
                style={{ paddingBottom: "1rem" }}
              >
                <Form.Control
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      ["password2"]: e.target.value,
                    }))
                  }
                  value={userData?.password2}
                  type={"password"}
                />
              </Form.Group>
            </>
          )}
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
              handleSubmit();
            }}
          >
            Sign Up
          </Button>
        )}
        <ErrorPrinter error={error} />
      </Form>
    </div>
  );
};

export default SignUpUserData;
