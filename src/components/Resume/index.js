import React from "react";
import resumeIcon from "../../assets/home-page/resume.png";
function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-info">
        <a
          href="https://docs.google.com/document/d/13bjYBfPRz9WPQH4W2iV4wcHmQeZ9ak33bUZM3Q1DzO4/edit?usp=sharing"
          className="resume-link"
        >
          Download my RESUME pdf<img src={resumeIcon} style={{height:"30px"}}></img>
        </a>
        <h2 className="skills-title">My skills include :</h2>
        <ul className="resume-list">
          <li> HTML, CSS, Javascript</li>
          <li> Bootstrap</li>
          <li> JQuery</li>
          <li> APIs</li>
          <li> Node JS</li>
          <li> Test Driven Development</li>
          <li> Express JS</li>
          <li> Sequelize</li>
          <li> Mongoose</li>
          <li>Progressive Web Apps</li>
          <li>REACT</li>
          <li>Apollo</li>
          <li>Graph Ql</li>
          <li>GitHub</li>
          <li>VS Code</li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;
