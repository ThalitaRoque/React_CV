import React from "react";
import "./More.css";

const More = ({ languages, habilities }) => {
  return (
    <div className="more">
      <div className="idiomas">
      {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
       <p> {item.name}</p>
        <h6> Idioma: {item.language}</h6>
        <p> Nivel escrito: {item.wrlevel}</p>
        <p> Nivel oral: {item.splevel}</p>
      </div>
      );
        })}
        </div>
       
      
      <div className="habilities">
     
        { habilities.map((txt) => (
          <p key={txt}>{txt}</p>
        ))}
        
      </div>
    </div>
  );
};

export default More;