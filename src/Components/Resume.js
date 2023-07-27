import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resume.css";
function Resume() {
  const navigate = useNavigate();
  return (
    <div className="resume">
      <div className="resume">
        <h1>Resume</h1>
        <a
          className="resume-link"
          href="https://docs.google.com/document/d/e/2PACX-1vT54IfajKClFvOEN4owUQB8xW1nFA6WEBi14qOVf7Kxck6TE_mRvCnuTUI7eJ_P1gbkQIvJjcKyx_7j/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          view resume document
        </a>
        <div className="skills">
          <h2>Skills</h2>
          <div>
            <h5>Front-end</h5>
            <p>
              React | Redux | JavaScript | TypeScript | Axios <br /> HTML | CSS
              | Tailwind CSS | BootStrap | Thunder Client <br /> Postman
            </p>
            <h5>Back-end</h5>
            <p>
              Node.js | Express.js | Python | Cors | Bcrypt | Jest | Cloudinary
            </p>
            <h5>Database</h5>
            <p>Heroku | Bit.io | SQL | Sequelize | PostgreSQL </p>
            <h5>software development tools and methodologies</h5>
            <p className="n3">Git Github | Agile | Figma </p>
          </div>
        </div>
        <div className="Work">
          <h2>Experience</h2>
          <div className=" work-details">
            <div className="date-title">
              <h5>Web Developer - Devmountain</h5> <h5>Aug - May 2023</h5>
            </div>
            <p>
              • Developed a web application called Groove Burner using React,
              Node.js, Express, and Spotify API <br /> • Utilized Jest to test
              reusable components to ensure optimal user experience <br /> •
              Created an interface that allows users to search for songs and
              create a playlist by making a GET and POST request to the Spotify
              API to receive a response with the searched song <br /> •Applied
              agile methodologies to work in sprints until project completion{" "}
              <br /> • Implemented data protection methods such as Bcrypt and
              demonstrated data storage solutions using SQL <br />• Designed
              Wireframes using figma
            </p>
            <div className="date-title">
              <h5>Sound Designer - Zap Zorn Composer Tools</h5>{" "}
              <h5>July 2022 - Present</h5>
            </div>
            <p>
              • Created sound effects and music for various projects
              Collaborated with clients to understand their needs and ensure
              their vision was realized in the final product <br /> • Utilized
              industry-standard software, such as Logic, Ableton, and Pro Tools{" "}
              <br /> • Worked in a fast-paced, deadline-driven environment to
              ensure projects were completed on time and with high quality
            </p>
            <div className="date-title">
              <h5> Web Designer (Contract) - A Plus Services</h5> <h5>2022</h5>
            </div>
            <p className="n3">
              {" "}
              • Developed and maintained the company's website <br />
              • Collaborated with cross-functional teams to design and implement
              new features for the website <br />• Ensured the website was
              optimized for search engines and provided a user-friendly
              experience for clients
            </p>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div className=" work-details">
            <div className="date-title">
              <h5>Devmountain - Coding Boot Camp</h5> <h5>Aug - May 2023</h5>
            </div>
            <p>Full Stack Web Development</p>
            <div className="date-title">
              <h5>Meta</h5> <h5>Jun - Aug 2022</h5>
            </div>
            <p>
              {" "}
              • Programming with JavaScript <br />• Introduction to Frontend
              Development
            </p>
            <div className="date-title">
              <h5>Johns Hopkins University</h5> <h5>Sep- Oct 2022</h5>
            </div>
            <p> HTML, CSS and Javascript for Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
