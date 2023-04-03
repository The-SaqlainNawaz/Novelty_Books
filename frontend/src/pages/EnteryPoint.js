import React, { useEffect } from "react";
import Signinform from "../components/SigninForm/signinpform";
import "../pages/style.css";
import { useState } from "react";
import "../pages/style.css";
import { auth } from "../Firebase/configFirebase";
import { Navigate } from "react-router-dom";
import ReactLoading from "react-loading";
import LandingPage from "./LandingPage/LandingPage";
const EnteryPoint = () => {
  const [currentUser, setcurrentUser] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setcurrentUser(user.displayName);
        <Navigate to="/home" />;
      } else {
      }
    });
  }, []);
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  console.log(currentUser);
  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <ReactLoading
            type={"bubbles"}
            color={"red"}
            height={100}
            width={100}
          />
        </div>
      ) : currentUser ? (
        <Navigate to="/home" />
      ) : (
        <div style={{ color: "white" }}>hello</div>
      )}
    </>
  );
};

export default EnteryPoint;
