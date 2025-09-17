import React from "react";
import Hero from "./Hero";
import Description from "./Description";
import Skills from "./Skills";
import ShowReel from "./ShowReel";
import Projects from "./Projects";
import MusicSamples from "./MusicSamples";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Description />
      <Skills />
      <ShowReel />
      <Projects />
      <MusicSamples />
      <div className="get-in-touch">
        <Link to="/contact">Get in touch</Link>
      </div>
    </>
  );
};

export default Home;
