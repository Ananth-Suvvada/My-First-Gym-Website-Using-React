import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  function handleFormSubmission(e) {
    e.preventDefault();
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-overlay">
        <div className="contact-content">
          <h2>
            Join in BOY <span>2</span> MAN GYM
          </h2>
          <p>
            Want to join us <span>OR</span> Have any queries? Fill the form
            below..
          </p>
        </div>
        <form onSubmit={handleFormSubmission}>
          <input type="text" placeholder="Enter Your Name.." required />
          <input type="email" placeholder="Enter Your Email.." required />
          <input type="tel" placeholder="Enter Your Phone Number" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
