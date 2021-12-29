import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about-me" className="tab-css">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" className="tab-css">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/resume" className="tab-css">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" className="tab-css">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
