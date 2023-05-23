import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiArrowToTop } from "react-icons/bi";

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollVisibility = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Add event listener to handle scroll visibility on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  return (
    <div className="footer">
      <div>
        <p className="bold">Connect with me</p>
        <span className="icons">
          <AiOutlineInstagram className="icon" />
          <a
            href="https://www.linkedin.com/in/christopher-langley-87a419270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/Chrisklangley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="icon" />
          </a>
        </span>
      </div>
      {showScrollButton && (
        <div className="scroll-button" onClick={handleScroll}>
          <BiArrowToTop className="scroll-icon" />
        </div>
      )}
    </div>
  );
}

export default Footer;
