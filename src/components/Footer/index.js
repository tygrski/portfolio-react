import React from "react";
import githubIcon from "../../assets/home-page/github.png";
import linkedIn from "../../assets/home-page/linkedIn.png";

function Footer() {
  return (
    <footer className="wrap">
      <div className="footer-links">
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/travis-tybor-70160620b/"
          target="_blank"
        >
          <img
            className="linkedin-icon"
            src={linkedIn}
            alt="linkedIn icon"
            style={{ height: "50px" }}
          ></img>
        </a>
      </div>
      <div className="footer-links">
        <a className="github" href="https://github.com/tygrski" target="_blank">
          <img
            className="github-icon"
            src={githubIcon}
            alt="linkedIn icon"
            style={{ height: "50px" }}
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
