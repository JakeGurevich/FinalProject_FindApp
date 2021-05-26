import React from "react";
import { Link } from "react-router-dom";

const Container = ({ community }) => {
  return (
    <div className="containerWrap">
      <div className="container">
        <h1>{community.name}</h1>
        <h2>
          <i className="fas fa-map-marker-alt"></i>
          <span> </span>
          {community.owner.city}
        </h2>

        <p>
          <i className="fas fa-location-arrow"></i>
          <span> </span>
          {community.address.street}, {community.address.city}
        </p>
        <p>
          <i className="fas fa-male"></i>
          <span className="space"> </span>
          {community.owner.name}
        </p>
        <p>
          <i className="fas fa-address-book"></i>
          <span className="space"> </span>
          {community.owner.phone}
        </p>
      </div>
      <button>
        <Link to={`/community/${community.name}`}>Подробнее</Link>
      </button>
    </div>
  );
};

export default Container;
