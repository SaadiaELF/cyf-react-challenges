import React from "react";

const Card = (props, key) => {
  return (
    <div className="card" key={key}>
      <h2>HighScores : {props.country}</h2>
    </div>
  );
};

export default Card;
