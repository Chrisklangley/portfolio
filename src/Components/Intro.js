// import React, from "react";
// import { Link } from "react-router-dom";

import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import "./Intro.css";

function Intro() {
  return (
    <div className="scroll">
      <div className="intro">
        <div className="intro-container">
          <div className="pic-container rotate-center ">
            <img
              className="profile-pic"
              src="https://pbs.twimg.com/media/Fvqin0QaYAAIz1P?format=jpg&name=medium"
              alt="profile pic"
            />
          </div>
          <div className="about-me">
            <h1>
              Full Stack <br />
              React Developer👋🏿
            </h1>
            <p className="sub">a bit about me</p>
            <p>
              hey, im Christopher Langley. A passionate Full Stack React
              developer eager to bring projects to life.
            </p>
            <div className="about-nav">
              <a href="#about">
                <div className="about">About Me</div>
              </a>
              <a href="#resume">
                <div className="Resume">Resume</div>
              </a>
              <a href="#projects">
                <div className="Projects">Projects</div>
              </a>
              <a href="#contact">
                <div className="Contact">Contact</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Intro;
