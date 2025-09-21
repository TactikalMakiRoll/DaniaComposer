import React, { useState } from "react";

import farlanders from "../assets/farlanders.png";
import leoniDiSicilia from "../assets/I Leoni di Sicilia.jpg";
import superLocoWorld from "../assets/super loco world.png";
import hollowHome from "../assets/hollow home.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
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
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={false}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="carousel-dots"
        itemClass="carousel-item"
      >
        <div>
          <img
            className="carousel-image"
            src={farlanders}
            alt="Farlanders project"
          />
        </div>
        <div>
          <img
            className="carousel-image"
            src={leoniDiSicilia}
            alt="I Leoni di Sicilia project"
          />
        </div>
        <div>
          <img
            className="carousel-image"
            src={superLocoWorld}
            alt="Super Loco World project"
          />
        </div>
        <div>
          <img
            className="carousel-image"
            src={hollowHome}
            alt="Hollow Home project"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Projects;
