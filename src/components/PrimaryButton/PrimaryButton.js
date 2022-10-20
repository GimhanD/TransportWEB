import React from "react";
import './PrimaryButton.css';

function PrimaryButton({title}) {
    return(
        <div className="container">
            <text className="title">{title}</text>
        </div>
    );
}

export default PrimaryButton;