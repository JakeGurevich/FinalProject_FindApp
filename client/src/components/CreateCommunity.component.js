import React, { useState } from "react";
import "./CreateCommunity.css";

const CreateCommunity = ({ create }) => {
  const [name, setName] = useState("Name...");
  const [rabbi, setRabbi] = useState("");
  const [type, setType] = useState("");
  const [street, setStreet] = useState("Название улицы...");
  const [city, setCity] = useState("Название города...");
  const [description, setDescription] = useState("");
  return (
    <div className="testbox">
      <div className="form">
        <div className="banner">
          <h1>Создание общины</h1>
        </div>
        <div className="item">
          <p>Название общины :</p>
          <div className="name-item">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="contact-item">
          <div className="item">
            <p>Раввин :</p>
            <input
              type="text"
              name="name"
              value={rabbi}
              onChange={(e) => setRabbi(e.target.value)}
            />
          </div>
          <div className="item">
            <p>Направление общины :</p>
            <input
              type="text"
              name="name"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
        <div className="item">
          <p>Адрес</p>
          <input
            type="text"
            name="name"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            type="text"
            name="name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="item">
          <p>Опишите вашу общину</p>
          <textarea
            rows="3"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="btn-block">
          <button
            onClick={() => {
              create({
                name,
                rabbi,
                type,
                address: { city, street },
                description,
              });
            }}
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunity;
