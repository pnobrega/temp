import React from "react";
import BugForm from "../../Components/Bug-Create-Edit/bugForm";
import "./createBug.css"

const ViewCreateBugPage = () => {
  return (
    <div className="create-container">
      <BugForm title="Create Bug" />
    </div>
  );
};

export default ViewCreateBugPage;
