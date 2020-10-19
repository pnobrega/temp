import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../../../Controllers/Redux/bugSlice";

import BugCard from "../../Components/Bug-Card/bugCard";

import BugView from "../../Components/Bug-View/bugView";

import "./viewBugs.css";

const ViewBugPage = () => {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name: "",
    isDisplayed: false,
  });
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);

  function BugClicked(name) {
    SET_DISPLAY_BUG({
      isDisplayed: !DISPLAY_BUG.isDisplayed,
      name: name,
    });
  }

  return (
    <div className="bug-page-container">
      {bugs.map((bug, key) => (
        <BugCard key={key} bug={bug} Clicked={BugClicked} />
      ))}
      {DISPLAY_BUG.isDisplayed && (
        <BugView
          clicked={BugClicked}
          bug={bugs.filter((bug) => bug.name === DISPLAY_BUG.name)[0]}
        />
      )}
    </div>
  );
};

export default ViewBugPage;