import React from "react";
import "../../pages/style.css";
import { signOutUser } from "../../Redux/CureentUser/CurrentUserSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(signOutUser);
  };
  return (
    <div class="nav-bar">
      <button>SignOut</button>
    </div>
  );
};

export default Navbar;
