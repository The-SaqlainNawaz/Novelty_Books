import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/configFirebase";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Signinform from "../../components/SigninForm/signinpform";
import SignupForm from "../../components/SignupForm/signupForm";
import "./style.css";
import ReactLoading from "react-loading";

const LandingPage = () => {
  const [form, setForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(true);
      } else {
        setCurrentUser(false);
      }
    });
  }, [currentUser]);

  const handleSignin = () => {
    signInWithPopup(auth, provider);
    setCurrentUser(true);
  };
  const timer = setTimeout(() => {
    setIsLoading(true);
  }, 3000);
  if (currentUser) {
    <Navigate to="/home" />;
  }
  const toggleForm = () => {
    setForm(!form);
  };
  return (
    <>
      {isLoading ? (
        <div className="content">
          <small>Sire Welcome to</small>
          <h1 className="h11">Books World</h1>
          <br></br>
          <p>
            One of the best online books store in Pakistan<br></br>
            We believe that reading books can change lives for the better.
            <br></br>
            That is why we strive hard to provide our readers with the best
            online books shopping experience in Pakistan.<br></br>
            We love book reading and want to revive the passion of reading books
            <br></br>
            in our young generation.
          </p>
          <br />
          <button type="button" id="sign-in" onClick={() => toggleForm()}>
            Sign In
          </button>
          <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
          <button type="button" id="sign-up" onClick={() => toggleForm()}>
            Sign Up
          </button>
          {form ? <Signinform replace={true} /> : <SignupForm replace={true} />}
          <div className="orcontinue">
            <br />
            <h6>
              <i>OR</i>
            </h6>
          </div>

          <div className="icon"></div>
          <GoogleButton onClick={() => handleSignin()} />
        </div>
      ) : (
        <div className="loading-container">
          <ReactLoading
            type={"bubbles"}
            color={"red"}
            height={100}
            width={100}
          />
        </div>
      )}
    </>
  );
};

export default LandingPage;
