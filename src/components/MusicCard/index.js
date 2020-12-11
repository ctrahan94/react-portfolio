import React from "react";
import Music from "../../assets/images/groupproject.png";
import "./style.css";

function MusicCard() {
  return (
    <div className="card project1">
       <img className="music-api card-images" alt="Music Group Project" src={Music} />
            <div className="card-body h-100">
              <h5 className="card-title">Playlist Generator</h5>
              <p>
                <span>Description:</span> An app that allows you to search for songs, albums, artists and generate a playlist that is copied to your clipboard.

              </p>
              <p className="card-text">
                <a
                  href="https://ctrahan94.github.io/Playlist_generator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Site
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/ctrahan94/Playlist_generator"
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
