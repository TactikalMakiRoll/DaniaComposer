import React from "react";
import musicSheetIcon from "../assets/music-sheet.svg";
import lightbulbIcon from "../assets/lightbulb.svg";
import consoleIcon from "../assets/console.svg";

const Skills: React.FC = () => {
  return (
    <section className="block skills-block-wrapper container">
      <h2>Skills</h2>
      <div className="skills-block">
        <div className="skill skill-1">
          <div className="icon">
            <img src={musicSheetIcon} alt="Music Composition Icon" />
          </div>
          <p>High Quality Music Composition & Music Production</p>
        </div>
        <div className="skill skill-2">
          <div className="icon">
            <img src={lightbulbIcon} alt="Diverse Music Genres Icon" />
          </div>
          <p>Diverse Music Genres: From Orchestral to Experimental</p>
        </div>
        <div className="skill skill-3">
          <div className="icon">
            <img src={consoleIcon} alt="Interactive Music Design Icon" />
          </div>
          <p> Interactive Music Design for Gameplay & Narrative</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
