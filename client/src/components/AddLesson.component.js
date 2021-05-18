import React, { useState } from "react";

const AddLesson = ({ add }) => {
  const [name, setName] = useState("Недельная глава");
  const [day, setDay] = useState("Воскресенье");
  const [time, setTime] = useState("");
  return (
    <>
      <div className="testbox index">
        <div className="form">
          <div className="banner">
            <h1>Добавление урока</h1>
          </div>
          {/* <div className="item">
            <p>Название Урока :</p>
            <div className="name-item">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div> */}
          <div className="item">
            <p>Тема урока</p>
            <select onChange={(e) => setName(e.target.value)}>
              <option value="Недельная глава">Недельная глава</option>
              <option value="Хасидут">Хасидут</option>
              <option value="Талмуд">Талмуд</option>
              <option value="Урок Торы">Урок Торы</option>
              <option value="Шульхан Арух">Шульхан Арух</option>
            </select>
          </div>
          <div className="item">
            <p>В какой день недели</p>
            <select onChange={(e) => setDay(e.target.value)}>
              <option value="Воскресенье">Воскресенье</option>
              <option value="Понедельник">Понедельник</option>
              <option value="Вторник">Вторник</option>
              <option value="Среда">Среда</option>
              <option value="Четверг">Четверг</option>
              <option value="Пятница">Пятница</option>
              <option value="Суббота">Суббота</option>
            </select>
          </div>
          <div className="item">
            <p>Время</p>
            <input
              onChange={(e) => setTime(e.target.value)}
              type="time"
              name="name"
            />
            <i className="fas fa-clock"></i>
          </div>
        </div>

        <div className="btn-block">
          <button
            onClick={() => {
              add({ name, day, time });
            }}
          >
            Добавить
          </button>
        </div>
      </div>
    </>
  );
};

export default AddLesson;
