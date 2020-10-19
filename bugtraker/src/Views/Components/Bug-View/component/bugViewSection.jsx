import React from "react";
import "./bugViewSection.css";

const ViewSection = (props) => {
  const valueInfo = props.info;
  const names = ["details", "steps"]
  const found = names.find(name => name === props.name)

  
  return (
    <div className="view-section">
      <h2 className="view-info">{props.title}</h2>
      {!props.status ? (
        <p className="words">{props.info}</p>
      ) : ( found === props.name &&
          <input
            name={props.name}
            onChange={props.editChange}
            value={valueInfo}
          />
      )}
    </div>
  );
};

export default ViewSection;
