import React from "react";

import farlanders from "../assets/farlanders.png";
import leoniDiSicilia from "../assets/I Leoni di Sicilia.jpg";
import superLocoWorld from "../assets/super loco world.png";
import hollowHome from "../assets/hollow home.png";

import "react-multi-carousel/lib/styles.css";

const Projects: React.FC = () => {
  return (
    <section className="block projects-block container">
      <h2>Projects</h2>
      <div className="projects">
        {/* The image source is now passed as a URL string to the CSS variable --bg-img */}
        <div
          className="project-item"
          style={{ "--bg-img": `url(${farlanders})` } as React.CSSProperties}
        >
          <div className="project-overlay">
            <p className="project-title">Original Soundtrack</p>
            <a
              href="https://www.youtube.com/watch?v=4R-wTPoTWj8&ab_channel=I-Human"
              className="listen-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen
            </a>
          </div>
        </div>

        <div
          className="project-item"
          style={
            { "--bg-img": `url(${leoniDiSicilia})` } as React.CSSProperties
          }
        >
          <div className="project-overlay">
            <p className="project-title">Music License</p>
            <a
              href="https://open.spotify.com/playlist/0Rldwy00cnV3EAJ9dGr3Om"
              className="listen-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen
            </a>
          </div>
        </div>

        <div
          className="project-item"
          style={
            { "--bg-img": `url(${superLocoWorld})` } as React.CSSProperties
          }
        >
          <div className="project-overlay">
            <p className="project-title">Original Soundtrack</p>
            <a
              href="https://www.youtube.com/watch?v=kWbY1juYWDo&ab_channel=I-Human"
              className="listen-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen
            </a>
          </div>
        </div>

        <div
          className="project-item"
          style={{ "--bg-img": `url(${hollowHome})` } as React.CSSProperties}
        >
          <div className="project-overlay">
            <p className="project-title">Original Soundtrack</p>
            <a
              href="https://www.youtube.com/watch?v=ZkN7p1Ih18o"
              className="listen-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
