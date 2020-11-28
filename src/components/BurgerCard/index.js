import React from "react";
import Burger from "../../assets/images/burger.png";
import "./style.css";

function BurgerCard() {
  return (
    <div className="card burger">
      <img className="burger-app card-images img-fluid" alt="Burger App" src={Burger} />
      <div className="card-body h-100">
        <h5 className="card-title">Eat-Da-Burger</h5>
        <p className="card-text">
          <a
            href="https://stark-atoll-35452.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Site
          </a>
        </p>
        <p>
          <a
            href="https://github.com/ctrahan94/homework11_Eat-Da-Burger" 
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

export default BurgerCard;
