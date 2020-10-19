import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Controllers/Redux/authSlice";

import "./sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  function SignOut() {
    dispatch(signOut());
  }

  return (
    <div className="side-bar">
      <Link className="title-link" to="/">
        <h1 className="company-name">Bug Tracker</h1>
      </Link>
      <ul className="list">
        <li>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/viewbugs" className="nav-link">
            View Bugs
          </Link>
        </li>
        {auth.admin && (
          <li>
            <Link to="/create" className="nav-link">
              Create Bug
            </Link>
          </li>
        )}
      </ul>
      <div className="button-div">
        <button className="button" onClick={SignOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
