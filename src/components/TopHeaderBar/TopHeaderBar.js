import React from "react";
import { FiPhone, FiMail, FiLinkedin, FiFacebook, FiTwitter  } from "react-icons/fi";
import { FaGooglePlusG } from "react-icons/fa";
import './TopHeaderBar.css';

function TopHeaderBar() {
  return (
    <div className="container">
       <div className="topHeaderBarContainer">
      <div className="sIcons">
        <FiFacebook className="sIcon" size={"20"}/>
        <FiTwitter className="sIcon" size={"20"}/>
        <FiLinkedin className="sIcon" size={"20"}/>
        <FaGooglePlusG className="sIcon" size={"20"}/>
      </div>
      <div className="contactCards">
        <div className="cards">
          <FiPhone />
          <text className="cardText">+ 61 40 111 5555</text>
        </div>
        <div className="cards">
          <FiMail />
          <text className="cardText">info@yourdomain.com</text>
        </div>
      </div>
    </div> 
    </div>
    
  );
}

export default TopHeaderBar;
