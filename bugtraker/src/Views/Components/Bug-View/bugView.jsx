import React, { useState } from "react";
import ViewSection from "./component/bugViewSection";
import BugModel from "../../../Models/bugModel";
import "./bugView.css";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../Controllers/Redux/bugSlice";

const BugView = (props) => {
  const dispatch = useDispatch();
  const [displayEdit, setDisplayEdit] = useState(false);
  const [editBugObject, setEditBugObject] = useState(new BugModel(props.bug));

  const handleEditBugChange = (event) => {
    setEditBugObject({
      ...editBugObject,
      [event.target.name]: event.target.value,
    });
  };

  const editClicked = () => {
    setDisplayEdit(!displayEdit);
  };

  const deleteClicked = () => {};

  return (
    <div className="bug-view">
      {!displayEdit ? (
        <h1 className="bug-title">{editBugObject.name}</h1>
      ) : (
        <input
          name="name"
          placehodler="Bug Name"
          onChange={handleEditBugChange}
          value={editBugObject.name}
          className="edit-name"
          required
        />
      )}

      <div className="info-view">
        <ViewSection
          title="Details"
          editChange={handleEditBugChange}
          status={displayEdit}
          info={editBugObject.details}
          name="details"
        />
        <ViewSection
          title="Steps"
          editChange={handleEditBugChange}
          status={displayEdit}
          info={editBugObject.steps}
          name="steps"
        />
        <ViewSection
          title="Priority"
          editChange={handleEditBugChange}
          status={displayEdit}
          info={editBugObject.priority}
          name="priority"
        />
        <ViewSection
          title="Creator"
          editChange={handleEditBugChange}
          status={displayEdit}
          info={editBugObject.creator}
          name="creator"
        />
        <ViewSection
          title="Version"
          editChange={handleEditBugChange}
          status={displayEdit}
          info={editBugObject.version}
          name="version"
        />
        <ViewSection
          title="Created"
          editChange={handleEditBugChange}
          status={displayEdit}
          info={editBugObject.time}
          name="time"
        />
      </div>

      {!displayEdit ? (
        <div className="button-container">
          <button onClick={deleteClicked} className="delete-button">
            Delete
          </button>
          <button onClick={editClicked} className="edit-button">
            Edit
          </button>
          <button
            onClick={() => {
              dispatch(markComplete());
            }}
            className="button-complete"
          >
            Complete
          </button>
          <button onClick={props.clicked} className="button-close">
            Close
          </button>
        </div>
      ) : (
        <button onClick={editClicked} className="edit-button">
          Done Editing
        </button>
      )}
    </div>
  );
};

export default BugView;
