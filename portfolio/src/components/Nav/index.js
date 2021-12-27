import React from "react";

function Nav() {
    return(
    <nav>
        <ul>
            <li>
               <a  href="#about-me"><span className= "navlnk">About Me</span></a>
           </li>
            <li>
               <a href="#my-work"><span className="navlnk">Projects</span></a>
           </li>
           <li>
           <a href= "#my-resume"><span className="navlnk">Resume</span></a>
            </li>
            <li>
           <a href= "#contact-me"><span className="navlnk">Contact</span></a>
            </li>
        </ul>
   </nav>
    )
}

export default Nav;