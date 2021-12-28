import React from "react";
import Nav from "../Nav";

function Header(props) {
  const navTabs = [ 'About Me','Projects', "Resume", 'Contact']
  
  
  return(

    
  <header>
        <div className="headingnm"> 
        <h1>Travis Tybor 
         </h1>
         </div>
         <ul className="nav-tabs">
      {navTabs.map(navTabs => (
        <li className="tab-category" key={navTabs}>
          <a
          href ={'#' + navTabs.toLowerCase()}
          className={props.currentPage === navtab ? 'nav-link active' : 'nav-link'}>
            {navTabs}
          </a>
        </li>
      ))}
         </ul>
    </header>
  )
}
  
export default Header;