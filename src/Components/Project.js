import React from "react";
import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

function Project() {
  return (
    <div className="p">
      <div className="Project-tab">
        <h1>Projects</h1>
        <div className="project-container">
          <div className="proj">
            <h2> Project #2: GrooveBurner </h2>
            <p>
              A react application that allows a user to view and create a
              playlist using the spotify API
            </p>
            <div>
              <a
                className="git-link"
                target="_blank"
                href="https://github.com/Chrisklangley/Specs-Capstone"
                rel="noreferrer"
              >
                {" "}
                github <AiFillGithub />
              </a>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/rm0arzR2DpM?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="project-container sweep">
          <div className="proj">
            <h2> Project #1: Expense Tracker </h2>
            <p>A react application that tracks a users Expenses</p>
            <div>
              <div className="project-links">
                <a
                  className="git-link"
                  target="_blank"
                  href="https://github.com/Chrisklangley/expenses-react"
                  rel="noreferrer"
                >
                  {" "}
                  github <AiFillGithub />
                </a>
                {/* <a
                  target="_blank"
                  href="https://expenses2023.herokuapp.com/"
                  className="demo-link"
                  rel="noreferrer"
                >
                  {" "}
                  live demo <FaDev />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
