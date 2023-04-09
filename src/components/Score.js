import React from "react";

function Score({ score }) {
  return (
    <div className="score">
      <p>Current Score: {score}</p>
    </div>
  );
}

export default Score;
