import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "./Container.component";
import Search from "./Search.component";
import "./Container.css";

export default function DisplayContent(props) {
  const [communities, setCommunities] = useState([]);
  // const [filter, setFilter] = useState("");
  const [filteredCommunities, setFilteredCommunities] = useState("");
  const getCommunities = async () => {
    const { data } = await axios.get("/api/communities");

    setCommunities(data);
  };
  const displayCommunities = communities.map((community) => {
    return <Container key={community._id} community={community} />;
  });
  // const displayFilteredCommunities = filteredCommunities.map((community) => {
  //   return <Container key={community._id} community={community} />;
  // });
  const setFiltered = (filter) => {
    const filtered = communities.filter((community) => {
      return community.owner.city.toLowerCase().includes(filter.toLowerCase());
    });
    console.log(filtered);
    setFilteredCommunities(filtered);
  };

  useEffect(() => {
    getCommunities();
  }, []);
  return (
    <div>
      <Search setFilter={setFiltered} />
      <h1>Communities</h1>
      <div className="content">
        {filteredCommunities
          ? filteredCommunities.map((community) => {
              return <Container key={community._id} community={community} />;
            })
          : displayCommunities}
      </div>
    </div>
  );
}
