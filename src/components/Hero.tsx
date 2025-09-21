import React from "react";

import linkedInIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";

const Hero: React.FC = () => {
  return (
    <section className="block hero">
      <div className="hero-parallax-image"></div>
      <div className="hero-content">
        <h1>Music for Games, Film & Interactive Media</h1>
      </div>
      <div className="social-links">
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
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img id="youtube-icon" src={youtubeIcon} alt="YouTube" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
