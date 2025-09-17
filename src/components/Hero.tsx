import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="block hero">
      <div className="hero-content">
        <h1>Music for Games, Film and Interactive Media</h1>
      </div>
      <div className="social-links">
        {/* Replace with actual icons */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LI
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          IN
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          YT
        </a>
      </div>
    </section>
  );
};

export default Hero;
