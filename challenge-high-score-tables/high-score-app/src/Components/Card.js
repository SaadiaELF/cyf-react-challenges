import React from "react";

const Card = (props) => {
    return <div className="card">
      <h2>HighScores : {props.country}</h2>
  </div>;
};

export default Card;
