import React from "react";

function Nav() {
    return(
    <nav>
        <ul>
            <li>
               <a href="#about-me"><span class= "navlnk">About Me</span></a>
           </li>
            <li>
               <a href="#my-work"><span class= "navlnk">My Work</span></a>
           </li>
            <li>
           <a href= "#contact-me"><span class= "navlnk">Contact Me</span></a>
            </li>
        </ul>
   </nav>
    )
}

export default Nav;