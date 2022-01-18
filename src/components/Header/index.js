import React from "react";
import Nav from "../Nav";
import linkedIn from "../../assets/home-page/linkedIn.png";
import githubIcon from "../../assets/home-page/github.png";

function Header(props) {
  return (
    <header>
      <div className="headingnm">
        <h1>Travis Tybor</h1>
      </div>
      <div>
      <a
          className="linkedin"
          href="https://www.linkedin.com/in/travis-tybor-70160620b/"
          target="_blank"
        >
          <img className="linkedin-icon"
            src={linkedIn}
            alt="linkedIn icon"
            style={{ height: "50px" }}
          ></img>
        </a>
      </div>
      <div>
      <a className="github" 
        href="https://github.com/tygrski" target="_blank">
          <img className="github-icon"
            src={githubIcon}
            alt="linkedIn icon"
            style={{ height: "50px" }}
          ></img>
        </a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
