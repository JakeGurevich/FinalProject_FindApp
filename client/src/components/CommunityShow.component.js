import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "./Container.component";

const CommunityShow = () => {
  const [community, setCommunity] = useState("");
  const { handle } = useParams();

  useEffect(() => {
    const getCommunity = async () => {
      const { data } = await axios.get(`/api/community/${handle}`);

      const { community, lessons } = data;

      const newCommunity = { ...community, lessons: lessons };
      console.log(newCommunity);

      setCommunity(newCommunity);
    };

    getCommunity();
  }, [handle]);
  return (
    <div>
      {community && <Container community={community} />}
      <div className="containerWrap">
        <div className="container">
          <h1>Уроки в нашей общине</h1>
          {community &&
            community.lessons.map((lesson, i) => {
              return (
                <div className="lesson" key={i}>
                  <p>{lesson.name}</p>

                  <p>
                    {lesson.day} ({lesson.time})
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CommunityShow;
