import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "./Container.component";
import "./Container.css";

export default function DisplayContent(props) {
  const [communities, setCommunities] = useState([]);
  const getCommunities = async () => {
    const { data } = await axios.get("/api/communities");
    console.log(data);
    setCommunities(data);
  };
  const displayCommunities = communities.map((community) => {
    return <Container community={community} />;
  });
  useEffect(() => {
    getCommunities();
  }, []);
  return (
    <div>
      <h1>Communities</h1>
      {displayCommunities}
    </div>
  );
}
