import React from "react";
import Music from "../../assets/images/groupproject.png";
import "./style.css";

function MusicCard() {
  return (
    <div className="card project1">
       <img className="music-api card-images" alt="Music Group Project" src={Music} />
            <div className="card-body h-100">
              <h5 className="card-title">Music API Group Project</h5>
              <p className="card-text">
                <a
                  href="https://noracurcio.github.io/Music-API-Group-Project/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Site
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/ctrahan94/Music-API-Group-Project-1"
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

export default MusicCard;
