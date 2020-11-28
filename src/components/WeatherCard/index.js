import React from "react";
import Weather from "../../assets/images/weatherdashboard.png";
import "./style.css";

function WeatherCard() {
  return (
    <div className="card weatherdashboard">
      <img className="weather card-images" alt="Weather Dashboard" src={Weather} />
      <div className="card-body h-100">
        <h5 className="card-title">Weather Dashboard</h5>
        <p className="card-text">
          <a
            href="https://ctrahan94.github.io/homework06_weather_dashboard/" 
            target="_blank"
            rel="noreferrer"
          >
            Deployed Site
          </a>
        </p>
        <p>
          <a
            href="https://github.com/ctrahan94/homework06_weather_dashboard"
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

export default WeatherCard;
