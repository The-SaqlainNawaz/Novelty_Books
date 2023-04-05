import React, { useEffect } from "react";
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
    if (auth.currentUser) {
      alert("true");
      setcurrentUser(true);
    } else {
      alert("false");
      setcurrentUser(false);
    }
  }, []);
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  if (currentUser) {
    <Navigate to="/home" />;
  }
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
        <div>
          <LandingPage />
        </div>
      )}
    </>
  );
};

export default EnteryPoint;
