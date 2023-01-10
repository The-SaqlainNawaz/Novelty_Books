//create slice
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Firebase/configFirebase";

const initialState = {
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
    signin: () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
      // signInWithRedirect(auth, provider)
    },
    setCurrentuser: (state) => {
      const unsubscribe = onAuthStateChanged(auth, (cUser) => {
        console.log(cUser.displayName);
        state.currentUser.displayName = cUser.displayName;
        state.currentUser.email = cUser.email;
        state.currentUser.uid = cUser.uid;
        // console.log("User", state.currentUser);
      });
    },
  },
});

export const { signin, setCurrentuser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
