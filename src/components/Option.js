import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const greenCheck = (
  <FontAwesomeIcon style={{ color: "green" }} icon={faCheck} size="2x" />
);
const redX = (
  <FontAwesomeIcon style={{ color: "red" }} icon={faTimes} size="2x" />
);

function Option({ option, onClick }) {
  const checkOrXIcon = option.correct ? greenCheck : redX;
  const icon = option.selected ? checkOrXIcon : null;

  return (
    <div className="option">
      <button className="btn" key={option.value} onClick={onClick} disabled={option.selected}>
        {option.value}
      </button>
      {icon}
    </div>
  );
}

export default Option;