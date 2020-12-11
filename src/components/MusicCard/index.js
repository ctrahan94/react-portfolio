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
              <p>
              <span>Role:</span>Used jQuery AJAX method to make requests to server-side APIs. Created an HTML page and styled with CSS and integrated Deezer API and manipulated the DOM using JavaScript leveraging the DOM API. 
              <span>Tools Utilized:</span> HTML, CSS, JSON,  AJAX, HTTP GET requests, and Server-side APIs
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
