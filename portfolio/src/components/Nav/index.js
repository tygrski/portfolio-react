import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul>
        
        <li>
          <Link to="/projects" className="tab-css">
            Portfolio
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
        <li>
          <Link to="/about-me" className="tab-css">
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
