import React from "react";
import NavBarButton from "../NavBarButton/NavBarButton";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import logo_sen from "../../assets/logo_sen.jpeg";
import TopHeaderBar from "../TopHeaderBar/TopHeaderBar";

function Header() {
  return (
    <div>
      <TopHeaderBar/>
      <div className="headerContainer">
        <div className="logo">
          <img src={logo_sen} width={"250px"} />
        </div>
        <div className="navItems">
          <NavBarButton title={"HOME"} />
          <NavBarButton title={"ABOUT US"} />
          <NavBarButton title={"TEAM"} />
          <NavBarButton title={"OUR SERVICES"} />
          <NavBarButton title={"CONTACT US"} />
          <div className="searchIcon">
            <FiSearch size={"25"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
