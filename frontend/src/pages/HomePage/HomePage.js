import React from "react";
import { auth } from "../../Firebase/configFirebase";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      HomePage
      <div>Hello {auth.currentUser.displayName}</div>
    </div>
  );
};

export default HomePage;
