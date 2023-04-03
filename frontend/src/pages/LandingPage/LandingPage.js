import React from "react";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/configFirebase";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Signinform from "../../components/SigninForm/signinpform";
import SignupForm from "../../components/SignupForm/signupForm";
import "./style.css";
const LandingPage = () => {
  const [form, setForm] = useState(true);
  const provider = new GoogleAuthProvider();

  const handleSignin = () => {
    if (currentUser) {
      <Navigate to="/home" />;
    } else {
      signInWithPopup(auth, provider);
    }
  };

  return (
    <div className="content">
      <small>Sire Welcome to</small>
      <h1 className="h11">Books World</h1>
      <br></br>
      <p>
        One of the best online books store in Pakistan<br></br>
        We believe that reading books can change lives for the better.
        <br></br>
        That is why we strive hard to provide our readers with the best online
        books shopping experience in Pakistan.<br></br>
        We love book reading and want to revive the passion of reading books
        <br></br>
        in our young generation.
      </p>
      <br />
      <button type="button" id="sign-in">
        Sign In
      </button>
      <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
      <button type="button" id="sign-up">
        Sign Up
      </button>
      {form ? <Signinform /> : <SignupForm />}
      <div className="orcontinue">
        <br />
        <h6>
          <i>OR</i>
        </h6>
      </div>

      <div class="icon"></div>
      <GoogleButton onClick={() => handleSignin()} />
    </div>
  );
};

export default LandingPage;
