import React from "react";
import Shelf from "../../assets/images/shelfIndulgence.png";
import "./style.css";

function ShelfCard() {
  return (
    <div className="card project2">
      <img className="book card-images" alt="Shelf Indulgence" src={Shelf} />
      <div className="card-body h-100">
        <h5 className="card-title">Shelf Indulgence</h5>
        <p className="card-text">
          <a
            href="https://shelf-indulgence-bc.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Site
          </a>
        </p>
        <p>
          <a
            href="https://github.com/ctrahan94/project2_BookClub"
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

export default ShelfCard;
