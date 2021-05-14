import React from "react";

const Lessons = ({ lessons }) => {
  const displayLessons = () => {
    if (lessons) {
      return lessons.map((lesson) => {
        return (
          <div className="lesson">
            <p>lesson.name</p>
            <p>lesson.time</p>
            <p>lesson.day</p>
          </div>
        );
      });
    }
  };

  return (
    <div className="lessons">
      <p>Уроки </p>
      {displayLessons}
      <div>
        <button>+</button>
      </div>
    </div>
  );
};

export default Lessons;
