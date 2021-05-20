import React from "react";

const Lessons = (props) => {
  // const displayLessons = () => {
  //   if (lessons) {
  //     return lessons.map((lesson) => {
  //       return (
  //         <div className="lesson">
  //           <p>lesson.name</p>
  //           <p>lesson.time</p>
  //           <p>lesson.day</p>
  //         </div>
  //       );
  //     });
  //   }
  // };

  return (
    <div className="lessons">
      <p>Уроки в вашей общине ({props.lessons.length}) :</p>
      {props.lessons &&
        props.lessons.map((lesson, i) => {
          return (
            <div className="lesson" key={i}>
              <p>{lesson.name}</p>

              <p>
                {lesson.day} ({lesson.time})
              </p>
              <button onClick={() => props.delete(lesson._id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default Lessons;
