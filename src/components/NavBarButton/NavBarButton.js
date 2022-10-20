import React from "react";
import './NavBarButton.css';

function NavBarButton({title}) {
    return (
        <div>
         <div className="title-container" >
            <text>{title}</text>
         </div>
        </div>
    );
}

export default NavBarButton;