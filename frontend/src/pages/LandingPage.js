import React from "react";
import Signinform from "../components/SigninForm/signinpform";
import "../pages/style.css";
import { useState } from "react";
import SignupForm from "../components/SignupForm/signupForm";
import GoogleButton from "react-google-button";
import { auth } from "../Firebase/configFirebase";
import { useDispatch } from "react-redux";
import { signin } from "../Redux/CureentUser/CurrentUserSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const LandingPage = () => {
  const { userExist } = useSelector((store) => store.currentUser);
  const [form, setForm] = useState(true);
  const dispatch = useDispatch();
  const handleSignin = () => {
    dispatch(signin());
  };
  return (
    <div>
      {auth ? (
        <Navigate to="/home" />
      ) : (
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
          <GoogleButton onClick={handleSignin} />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
