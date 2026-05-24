import React from "react";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            BECOME A <span>MAN</span>
          </h1>
          <h3>
            By choosing <span>BOY 2 MAN</span> GYM
          </h3>
          <p>
            Kill <span> THE BOY </span> & <span> REBORN </span>& Let the world
            see the <span> BEAST </span>
            inside you.
          </p>

          <div className="hero-btns">
            <button className="joinBtn">Join Us</button>
            <button className="vipBtn">VIP Membership</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
