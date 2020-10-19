import React from "react"
import "./dashboardCard.css"
import PriorityController from "../../../Controllers/priorityController"

const DashboardCard = (props) => {
  const {level, color} = PriorityController(props.priority);
  
  return (
    <div className="dashboard-card" onClick={props.clicked}style={{color:color}}>
      <h2 className="header">{level} </h2>
      <p className="amount">Total: {props.count}</p>
    </div>
  )
}

export default DashboardCard