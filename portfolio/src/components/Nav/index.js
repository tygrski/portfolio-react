import React, { useState } from "react";

function Nav(props) {
 
    return(
    <nav>
        <ul>
            {props.NavTab.map(item => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
   </nav>
    )
 }

export default Nav;