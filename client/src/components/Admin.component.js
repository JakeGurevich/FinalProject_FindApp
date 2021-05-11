import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayUser from "./DisplayUser.component";

export default function Admin(props) {
  const [data, setData] = useState("");
  const [update, setUpdate] = useState("");

  const authAxios = axios.create({
    baseUrl: "",
    headers: { Authorization: `Bearer ${props.token}` },
  });
  const getUser = async () => {
    const { data } = await authAxios.get("/api/users/me");
    console.log(data);
    setData(data);
  };

  const logOut = async () => {
    try {
      if (props.token) {
        await authAxios.post("/api/users/logout");
      }

      setUpdate(data);
      props.set("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [update]);

  return (
    <div className="adminContainer">
      <DisplayUser data={data} logout={logOut} set={props.set} />
    </div>
  );
}
