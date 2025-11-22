import React from "react";

import linkedInIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";

const Hero: React.FC = () => {
  return (
    <section className="block hero">
      <div className="hero-parallax-image"></div>
      <div className="hero-content">
        <h1>Music for Games, Films & Interactive Media</h1>
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/danylo-dunets-a8ab031b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/ihuman.official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://www.youtube.com/@IHumanOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="youtube-icon" src={youtubeIcon} alt="YouTube" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
