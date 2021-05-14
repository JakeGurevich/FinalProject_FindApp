import React from "react";
import Lessons from "./Lessons.component";
const Community = (props) => {
  return (
    <>
      <div className="containerWrap">
        <div className="title">Ваша община</div>
        <div className="container">
          <h1>{props.data.name}</h1>
          <h2>{props.data.rabbi}</h2>

          <p>
            {props.data.address.street}, {props.data.address.city}
          </p>
          <p>{props.data.description}</p>
          <div className="lessons">
            <Lessons />
          </div>
        </div>
        {!props.data.name ? (
          <button onClick={props.switch}>Создать общину</button>
        ) : (
          <button onClick={() => props.togle(true)}>
            Редактировать общину
          </button>
        )}
      </div>
    </>
  );
};

export default Community;
