import React from "react";
import "./Container.css";

const CardUser = ({ data }) => {
  return (
    <div className="containerWrap">
      <div className="title">Ваш профиль</div>
      <div className="container">
        <h1>
          {" "}
          <span className="small">Имя : </span>
          {data.owner.name}
        </h1>
        <h2>
          {" "}
          <span className="small">Город : </span>
          {data.owner.city}
        </h2>
        <h2>
          {" "}
          <span className="small">Телефон : </span>
          {data.owner.phone}
        </h2>
      </div>
    </div>
  );
};

export default CardUser;
