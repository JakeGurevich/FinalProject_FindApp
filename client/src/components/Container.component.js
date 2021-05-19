import React from "react";
import { Link } from "react-router-dom";

const Container = ({ community }) => {
  return (
    <div className="containerWrap">
      <div className="container">
        <h1>{community.name}</h1>
        <h2>{community.owner.city}</h2>

        <p>
          {community.address.street}, {community.address.city}
        </p>
        <p>{community.owner.name}</p>
        <p>{community.owner.phone}</p>
      </div>
      <button>
        <Link to={`/community/${community.name}`}>Подробнее</Link>
      </button>
    </div>
  );
};

export default Container;
