import React, { useState } from "react";

const EditCommunity = ({ edit, data, togle }) => {
  const [name, setName] = useState(data.name);
  const [rabbi, setRabbi] = useState(data.rabbi);
  const [type, setType] = useState(data.type);
  const [street, setStreet] = useState(data.address.street);
  const [city, setCity] = useState(data.address.city);
  const [description, setDescription] = useState(data.description);

  return (
    <>
      <div className="testbox index">
        <div className="form">
          <div onClick={() => togle(false)}>Закрыть</div>
          <div className="banner">
            <h1>Редактирование</h1>
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
                edit({
                  name,
                  rabbi,
                  type,
                  address: { city, street },
                  description,
                });
              }}
            >
              Редактировать
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCommunity;
