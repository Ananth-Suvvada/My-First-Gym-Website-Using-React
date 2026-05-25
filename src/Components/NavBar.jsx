import React from "react";
import "../Styles/NavBar.css";
import menuIcon from "../assets/icon-menu.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1 className="logo">
        BOY <span>2</span> MAN
      </h1>
      <ul className="menu">
        <li>
          <a href="#hero">Home</a>
        </li>

        <li>
          <a href="#programs">Programs</a>
        </li>

        <li>
          <a href="#trainers">Trainers</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="enrollBtn">Enroll Now</button>
      <div className="toggle">
        <img src={menuIcon} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
