import React from "react";
import linkedInIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";

const Contact: React.FC = () => {
  return (
    <div className="container" id="contact">
      <h2>Get in Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind or just want to say hello?
      </p>
      <form
        className="gform"
        action="https://script.google.com/macros/s/AKfycbzatEg_bjwkD1j0FMC_AnKtRTf797rzzmgtZM7f1wIapc7spXvs4-Yqrz6fiDWTSnix0w/exec"
        method="POST"
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={7} required></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      <div className="contact-info">
        <p>
          <a href="mailto:danylo.dunets@gmail.com">weareihuman@gmail.com</a>
        </p>
        <div className="social-links-contact">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
