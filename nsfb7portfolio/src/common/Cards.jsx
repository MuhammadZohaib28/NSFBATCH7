import React from "react";
import "./card.css";


const Cards = ({ title, picture, desc }) => {
  return (
    <div className="card-container">
      <div className="card-ui">
        <h1>{title}</h1>

        <img src={picture} alt="" />

        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Cards;
