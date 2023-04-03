import React, { useEffect } from "react";
import { auth } from "../../Firebase/configFirebase";
import Navbar from "../../components/Navbar/Navbar";
import "../HomePage/style.css";
import ReactLoading from "react-loading";
const HomePage = () => {
  const [currentUser, setcurrentUser] = React.useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setcurrentUser(user.displayName);
      } else {
        console.log("user is not signed in");
      }
    });
  }, []);
  return (
    <>
      {currentUser ? (
        <div style={{ color: "white" }}>
          <Navbar />
          HomePageee
          <div style={{ color: "white" }}> Hello {currentUser}</div>
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

export default HomePage;
