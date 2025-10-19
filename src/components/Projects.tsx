import React from "react";

import farlanders from "../assets/farlanders.png";
import leoniDiSicilia from "../assets/I Leoni di Sicilia.jpg";
import superLocoWorld from "../assets/super loco world.png";
import hollowHome from "../assets/hollow home.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 2560, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
          {/* Content for Farlanders project (e.g., title, description) */}
        </div>

        <div
          className="project-item"
          style={
            { "--bg-img": `url(${leoniDiSicilia})` } as React.CSSProperties
          }
        >
          {/* Content for I Leoni di Sicilia project */}
        </div>

        <div
          className="project-item"
          style={
            { "--bg-img": `url(${superLocoWorld})` } as React.CSSProperties
          }
        >
          {/* Content for Super Loco World project */}
        </div>

        <div
          className="project-item"
          style={{ "--bg-img": `url(${hollowHome})` } as React.CSSProperties}
        >
          {/* Content for Hollow Home project */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
