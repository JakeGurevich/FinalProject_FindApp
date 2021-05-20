import React, { useState } from "react";
import Lessons from "./Lessons.component";
import AddLesson from "./AddLesson.component";
const Community = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="containerWrap">
        <div className="title">Ваша община</div>
        <div className="containerAd">
          <h1>
            <span className="small">Название : </span>
            {props.data.name}
          </h1>
          <h2>
            <span className="small">Раввин : </span>
            {props.data.rabbi}
          </h2>

          <h4>
            <span className="small">Адрес : </span>
            {props.data.address.street}, {props.data.address.city}
          </h4>
          <h4>
            <span className="small">Направление : </span>
            {props.data.type}
          </h4>
          <h4>
            <span className="small">Описание : </span>
            {props.data.description}
          </h4>

          <div className="lessons">
            <Lessons lessons={props.data.lessons} delete={props.delete} />
            <div className="lessBtn">
              <button onClick={() => setShow(true)}>+</button>
            </div>
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
      {show && <AddLesson add={props.add} close={setShow} />}
    </>
  );
};

export default Community;
