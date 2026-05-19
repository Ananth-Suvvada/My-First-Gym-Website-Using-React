import React from "react";
import "../Styles/NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <h1 className="logo">
        BOY <span>2</span> MAN
      </h1>
      <ul className="menu">
        <a href="">
          <li>Home</li>
        </a>
        <a href="">
          <li>Programs</li>
        </a>
        <a href="">
          <li>Trainers</li>
        </a>
        <a href="">
          <li>Contact</li>
        </a>
      </ul>
      <button className="enrollBtn">Enroll Now</button>
    </div>
  );
};

export default NavBar;
