import React from "react";
import Planner from "../../assets/images/dailyPlanner.png";
import "./style.css";

function PlannerCard() {
  return (
    <div className="card dayplanner">
      <img className="planner card-images" alt="Day Planner" src={Planner} />
      <div className="card-body h-100">
        <h5 className="card-title">Day Planner</h5>
        <p className="card-text">
          <a
            href="https://ctrahan94.github.io/homework05_day_planner/" 
            target="_blank"
            rel="noreferrer"
          >
            Deployed Site
          </a>
        </p>
        <p>
          <a
            href="https://github.com/ctrahan94/homework05_day_planner"  
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </p>
      </div>
    </div>
  );
}

export default PlannerCard;
