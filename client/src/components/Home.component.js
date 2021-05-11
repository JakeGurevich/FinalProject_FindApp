import React from "react";
import DisplayContent from "./DisplayContent.component";
import Header from "./Header.component";

const Home = (props) => {
  return (
    <>
      <Header />
      <h1>Find your shiur</h1>
      <DisplayContent />
    </>
  );
};

export default Home;
