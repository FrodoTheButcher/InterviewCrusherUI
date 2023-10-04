import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const SignUpSocialMedia = (progressParam, setProgressParam) => {
  const [progress, setProgress] = useState(progressParam);

  useEffect(() => {
    setProgress(progressParam);
  }, [progressParam]);

  return (
    <>
      <div
        className="signUpOrDiv"
        style={{ display: progress > 0 ? "none" : "" }}
      >
        <hr className="signUpOrDevider"></hr>
        <div className="signUpOrIcon">OR</div>
        <hr className="signUpOrDevider"></hr>
      </div>
      <div
        className="signUpConnectSocialMedia"
        style={{ display: progress > 0 ? "none" : "" }}
      >
        <div
          className="signUpConnectCircle"
          style={{ backgroundColor: "#4fb1ea" }}
        >
          <div className="signUpConnectCircleText">G</div>
        </div>
        <div
          className="signUpConnectCircle"
          style={{ display: progress > 0 ? "none" : "" }}
        >
          <div className="signUpConnectCircleText">f</div>
        </div>
      </div>
      <div>
        {progress ? (
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              fontWeight: "600",
              fontSize: "1.2rem",
              fontFamily: "verdana",
            }}
          >
            <Button onClick={() => setProgressParam((prev) => prev - 1)}>
              Back
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SignUpSocialMedia;
