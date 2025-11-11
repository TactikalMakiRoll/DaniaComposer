import React from "react";
import AudioPlayer from "./AudioPlayer";

const MusicSamples: React.FC = () => {
  // State and logic for the music player will go here
  return (
    <section className="block music-samples-block">
      <h2>Selected Works</h2>
      <AudioPlayer />
    </section>
  );
};

export default MusicSamples;
