import React from "react";
import "./Container.css";

const CardUser = ({ data }) => {
  return (
    <div className="containerWrap">
      <div className="title">Ваш профиль</div>
      <div className="container">
        <h1>{data.owner.name}</h1>
        <h2>{data.owner.city}</h2>
        <h2>{data.owner.phone}</h2>
      </div>
    </div>
  );
};

export default CardUser;
