import React from "react";
import "../Styles/Trainers.css";
import { trainerData } from "../Data/Gym Website Data";

const Trainers = () => {
  return (
    <section className="trainers">
      <h1>Our Trainers</h1>
      <div className="trainersGrid">
        {trainerData.map((trainer) => (
          <div className="trainerCard" key={trainer.id}>
            <img src={trainer.img} alt="" />
            <h2>{trainer.name}</h2>
            <h3>{trainer.role}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
