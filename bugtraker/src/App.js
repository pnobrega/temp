import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/Pages/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Views/Sidebar/sidebar";
import ViewBugPage from "./Views/Pages/ViewBugs/viewBugs";
import "./App.css";
import ViewCreateBugPage from "./Views/Pages/CreateBug/createBug";
import Dashboard from "./Views/Pages/Dashboard/dashboard";

function App() {
  const { auth } = useSelector((state) => state);

  return (
    <Router>
      {!auth.loggedIn ? (
        <Login />
      ) : (
        <section className="big-container">
          <div className="flex-container">
            <Sidebar />
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/viewbugs">
                <ViewBugPage />
              </Route>
              <Route path="/create">
                <ViewCreateBugPage />
              </Route>
            </Switch>
          </div>
        </section>
      )}
    </Router>
  );
}

export default App;
