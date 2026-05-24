import React from "react";
import "../Styles/Programs.css";
import { programData } from "../Data/Gym Website Data.js";

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <h1>Our Programmes</h1>
      <div className="programsGrid">
        {programData.map((program) => (
          <div id="specialCard" className="programeCard" key={program.id}>
            <img src={program.img} alt="" />
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
