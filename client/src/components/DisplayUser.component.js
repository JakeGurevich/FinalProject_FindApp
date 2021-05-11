import React from "react";
import axios from "axios";
import CardUser from "./CardUser.component.js";
import "./Container.css";
import Community from "./Community.component";
import "./DisplayUser.css";

export default function DisplayUser({ data, logout }) {
  return (
    <div className="adminContainer">
      <div className="logout">
        <button onClick={logout}>Log Out</button>
        <p>
          Здравствуйте , <span> {data.name}</span>
        </p>
      </div>
      <div className="content">
        <CardUser data={data} />
        <Community />
      </div>
    </div>
  );
}
