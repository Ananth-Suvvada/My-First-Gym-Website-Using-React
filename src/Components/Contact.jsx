import React from "react";
import "../Styles/Contact.css";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-overlay">
        <h1>
          Join Now in BOY <span>2</span> MEN GYM
        </h1>
        <p>Have any quaries? Are you Interested? Fill the form below!</p>
        <form>
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter your Email" />
          <textarea>Write Something Here...</textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
