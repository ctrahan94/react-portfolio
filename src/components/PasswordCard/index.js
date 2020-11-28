import React from "react";
import Password from "../../assets/images/passwordGenerator.png";
import "./style.css";

function PasswordCard() {
  return (
    <div className="card passwordGenerator">
      <img className="passwordGen card-images" alt="Password Generator" src={Password} />
      <div className="card-body h-100">
        <h5 className="card-title">Password Generator</h5>
        <p className="card-text">
          <a
            href="https://ctrahan94.github.io/homework03_random_password_generator/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Site
          </a>
        </p>
        <p>
          <a
            href="https://github.com/ctrahan94/homework03_random_password_generator"  
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

export default PasswordCard;
