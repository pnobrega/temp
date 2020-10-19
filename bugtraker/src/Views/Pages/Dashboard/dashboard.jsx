import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {getBugs} from "../../../Controllers/Redux/bugSlice"
import "./dashboard.css"
import DashboardCard from "../../Components/Dashboard-Card/dashboardCard"


const Dashboard = () => {
  
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.bugs)
  const browserHistory = useHistory();


  useEffect(() => {dispatch(getBugs())}, [bugs === undefined])

  

  let highCount = 0
  let mediumCount = 0
  let lowCount = 0

  const redirect = () => {browserHistory.push("./viewbugs")}
 
  const filterBugs = (priority) => {
    return bugs.filter(bug => priority === bug.priority)
  }

  if (bugs !== undefined) {
    highCount = filterBugs(1);
    mediumCount = filterBugs(2);
    lowCount = filterBugs(3);
  }


  
  return (
    <div className="dashboard-container">
    <DashboardCard priority="1" 
    count={highCount.length}
    clicked={redirect}/>
    <DashboardCard priority="2" 
    count={mediumCount.length}
    clicked={redirect}/>
    <DashboardCard priority="3" 
    count={lowCount.length}
    clicked={redirect}/>
    </div>
  )
}


export default Dashboard