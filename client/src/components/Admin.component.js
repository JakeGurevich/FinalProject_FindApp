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
  const createCommunity = async (community) => {
    const { data } = await authAxios.post("/api/communities", community);

    console.log(data);
  };
  const createLesson = async (lesson) => {
    console.log(lesson);
    const { data } = await authAxios.post("/api/community/lesson", lesson);
    console.log(data);
    setUpdate("update");
  };
  const deleteLesson = async (id) => {
    console.log(id);
    const { data } = await authAxios.delete(`/api/community/lesson/${id}`);
    console.log(data);
    setUpdate("update");
  };
  const editCommunity = async (community) => {
    const { data } = await authAxios.patch("/api/community/me", community);
    console.log(data);
    setUpdate("update");
  };

  useEffect(() => {
    const getUser = async () => {
      const { data } = await authAxios.get("/api/communities/me");

      const { community, lessons } = data;
      const newCommunity = { ...community, lessons: lessons };

      setData(newCommunity);
    };
    if (props.token) {
      getUser();
    }
  }, [update]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="adminContainer">
      {data ? (
        <DisplayUser
          data={data}
          logout={logOut}
          create={createCommunity}
          edit={editCommunity}
          add={createLesson}
          delete={deleteLesson}
        />
      ) : (
        ""
      )}
    </div>
  );
}
