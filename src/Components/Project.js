import React from "react";
import "./Projects.css";

function Project() {
  return (
    <div className="">
      <div className="Project-tab">
        <h1>Projects</h1>
        <div className="project-container">
          <div className="proj">
            <h2>GroveBurner</h2>
            <p>
              A react application that allows a user to view and create a
              playlist using the spotify API
            </p>
          </div>
          <iframe
            width="491"
            height="331"
            src="https://www.youtube.com/embed/rm0arzR2DpM?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Project;
