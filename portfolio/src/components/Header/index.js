import React from "react";
import Nav from "../Nav";

function Header() {
  const navTabs = [
    {
      id:1,
      name: 'About Me'
    },
    {
      id:2,
      name:'Projects'
    },
    {
      id:3,
      name: "Resume"
    },
    {
      id:3,
      name:'Contact'
    }
  ]
  
  
  return(

    
  <header>
        <div className="headingnm"> 
        <h1>Travis Tybor 
         </h1>
         </div>
         <Nav navTabs={ navTabs } />
    </header>
  )
}
  
export default Header;