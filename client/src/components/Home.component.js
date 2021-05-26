import React from "react";
import DisplayContent from "./DisplayContent.component";
import Header from "./Header.component";
import Map from "./Map.component";
import Page from "./Page.component";

const Home = (props) => {
  return (
    <Page title="Welcome">
      <Header />

      <h1>Find your shiur</h1>
      <Map />
      <DisplayContent />
    </Page>
  );
};

export default Home;
