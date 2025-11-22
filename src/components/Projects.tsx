import React from "react";

import farlanders from "../assets/farlanders.png";
import leoniDiSicilia from "../assets/I Leoni di Sicilia.jpg";
import superLocoWorld from "../assets/super loco world.png";
import hollowHome from "../assets/hollow home.png";

import "react-multi-carousel/lib/styles.css";

const projectData = [
  {
    title: "Original Soundtrack",
    image: farlanders,
    url: "https://www.youtube.com/watch?v=4R-wTPoTWj8&ab_channel=I-Human",
  },
  {
    title: "Music License",
    image: leoniDiSicilia,
    url: "https://open.spotify.com/playlist/0Rldwy00cnV3EAJ9dGr3Om",
  },
  {
    title: "Original Soundtrack",
    image: superLocoWorld,
    url: "https://www.youtube.com/watch?v=kWbY1juYWDo&ab_channel=I-Human",
  },
  {
    title: "Original Soundtrack",
    image: hollowHome,
    url: "https://www.youtube.com/watch?v=ZkN7p1Ih18o",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="block projects-block container albums-container">
      <h2 id="albumsHeader">Projects</h2>
      <div className="albums">
        {projectData.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="album-item"
            style={
              { "--bg-img": `url(${project.image})` } as React.CSSProperties
            }
          >
            <div className="album-overlay">
              <p className="album-title">{project.title}</p>
              <a
                href={project.url}
                className="listen-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
