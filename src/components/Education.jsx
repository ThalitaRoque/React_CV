import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="item"> {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;