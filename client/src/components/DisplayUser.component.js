import React, { useState } from "react";

import CardUser from "./CardUser.component.js";
import "./Container.css";
import Community from "./Community.component";
import CreateCommunity from "./CreateCommunity.component";
import EditCommunity from "./EditCommunity.component";
import "./DisplayUser.css";

export default function DisplayUser(props) {
  const [togleCreate, setTogleCreate] = useState(false);
  const [togleEdit, setTogleEdit] = useState(false);
  const switchComponent = () => {
    console.log("Switch");
    setTogleCreate(!togleCreate);
  };
  return (
    <div className="adminContainer">
      <div className="logout">
        <button onClick={props.logout}>Log Out</button>
        <p>
          Здравствуйте , <span>{props.data.owner.name}</span>
        </p>
      </div>
      <div className="content admin">
        {console.log(props.data)}
        <CardUser data={props.data} />
        {!togleEdit ? (
          <Community
            data={props.data}
            switch={switchComponent}
            togle={setTogleEdit}
            togleEdit={togleEdit}
            edit={props.edit}
            add={props.add}
            delete={props.delete}
          />
        ) : (
          <EditCommunity
            data={props.data}
            edit={props.edit}
            togle={setTogleEdit}
          />
        )}

        {togleCreate ? <CreateCommunity create={props.create} /> : ""}
      </div>
    </div>
  );
}
