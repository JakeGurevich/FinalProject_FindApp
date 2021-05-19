import React, { useState } from "react";
import DisplayContent from "./DisplayContent.component";
import Header from "./Header.component";
import Map from "./Map.component";

const Home = (props) => {
  return (
    <>
      <Header />
      <h1>Find your shiur</h1>
      <Map />
      <DisplayContent />
    </>
  );
};

export default Home;
