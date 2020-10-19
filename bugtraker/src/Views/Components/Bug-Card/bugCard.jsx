import React from "react";
import "./bugCard.css";
import PriorityController from "../../../Controllers/priorityController";

const BugCard = (props) => {
  const { name, priority, version } = props.bug;

  const { level, color } = PriorityController(priority);

  function Clicked() {
    props.Clicked(name);
  }

  return (
    <div className="bug-card" onClick={Clicked} style={{ color: color }}>
      <h2 className="bug-name">{name}</h2>
      <h4 className="bug-priority">{level}</h4>
      <h5 className="bug-version">{version}</h5>
    </div>
  );
};

export default BugCard;
