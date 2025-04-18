import React from "react";
import "./card.css";

const Cards = ({ title, picture, desc, link, button }) => {
  return (
    <div className="card-container">
      <div className="card-ui">
        <h1>{title}</h1>

        <img src={picture} alt="" />

        <p>{desc}</p>

        {button && (
          <a href={link} target="_blank">
            <button>Go to Project</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Cards;
