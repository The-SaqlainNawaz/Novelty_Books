import { configureStore } from "@reduxjs/toolkit";
import CurrentUserSlice from "./CureentUser/CurrentUserSlice";

const store = configureStore({
  reducer: {
    currentUser: CurrentUserSlice,
  },
});
export default store;
