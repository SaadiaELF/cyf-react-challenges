import React from "react";

const Score = (props, key) => {
  return (
    <div className="card-score" key={key}>
      <div>{props.name}</div>
      <div>{props.score}</div>
    </div>
  );
};

export default Score;
