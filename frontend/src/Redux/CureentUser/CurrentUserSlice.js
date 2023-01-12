//create slice
import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Firebase/configFirebase";

const initialState = {
  userExist: false,
  currentUser: [
    {
      displayName: "",
      email: "",
      uid: "",
    },
  ],
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    signin: (state) => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
      console.log(auth.currentUser);
      state.userExist = true;
    },
    signOutUser: (state) => {
      auth.signOut();
      state.userExist = false;
      console.log(state.userExist);
    },
  },
});

export const { signin, signOutUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
