import React, { useState } from "react";
import "./bugForm.css";
import BugModel from "../../../Models/bugModel";

const BugForm = (props) => {
  const [bugObject, setBugObject] = useState(new BugModel(props.bug));

  const inputChanged = (event) => {
    setBugObject({
      ...bugObject,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-container">
      <h1>{props.title}</h1>
      <form className="bug-form">
        <div className="form-section">
          <label className="form-name">Name:</label>
          <input
            name="name"
            placehodler="Bug Name"
            onChange={inputChanged}
            value={bugObject.name}
            className="form-input"
            required
          />
        </div>

        <div className="form-section">
          <label className="form-name">Details:</label>
          <textarea
            name="details"
            placeholder="Detailed Description"
            onChange={inputChanged}
            value={bugObject.details}
            className="form-input"
            required
          ></textarea>
        </div>

        <div className="form-section">
          <label className="form-name">Steps:</label>
          <textarea
            name="steps"
            placeholder="Steps to Recreate the Bug"
            onChange={inputChanged}
            value={bugObject.steps}
            className="form-input"
            required
          ></textarea>
        </div>

        <div className="form-section">
          <label className="form-name">Priority:</label>
          <select
            name="priority"
            onChange={inputChanged}
            value={bugObject.priority}
            className="form-input"
            required
          >
            <option>--Select--</option>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </div>

        <div className="form-section">
          <label className="form-name">Assigned:</label>
          <select
            name="assigned"
            onChange={inputChanged}
            value={bugObject.assigned}
            className="form-input"
          >
            <option>--Select--</option>
            <option>Paulo N.</option>
          </select>
        </div>

        <div className="form-section">
          <label className="form-name">Application Version:</label>
          <input
            name="version"
            placeholder="Application Version"
            onChange={inputChanged}
            value={bugObject.version}
            className="form-input"
          />
        </div>

        <button className="button" type="submit">
          {props.title}
        </button>
      </form>
    </div>
  );
};

export default BugForm;
