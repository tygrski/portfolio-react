import React from "react";
import Nav from "../Nav";


function Header(props) {
  return (
    <header>
      <div className="headingnm">
        <h1>Travis Tybor</h1>
      </div>
   
      <Nav />
    </header>
  );
}

export default Header;
