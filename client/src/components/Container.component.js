import React from "react";

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
      <button>Подробнее</button>
    </div>
  );
};

export default Container;
