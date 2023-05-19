import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <div>
        <p className="bold">Connect with me</p>
        <span className="icons">
          <AiOutlineInstagram className="icon" />
          <a
            href="https://www.linkedin.com/in/christopher-langley-87a419270/"
            target="_blank"
          >
            <AiFillLinkedin className="icon" />
          </a>
          <a href="https://github.com/Chrisklangley">
            <AiFillGithub className="icon" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
