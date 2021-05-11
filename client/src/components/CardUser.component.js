import React from "react";
import "./Container.css";

const CardUser = ({ data }) => {
  return (
    <div className="containerWrap">
      <div className="container">
        <h1>{data.name}</h1>
        <h2>{data.city}</h2>
      </div>
      <button>Подробнее</button>
    </div>
  );
};

export default CardUser;
