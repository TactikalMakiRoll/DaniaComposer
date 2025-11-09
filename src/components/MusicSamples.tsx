import React from "react";
import AudioPlayer from "./AudioPlayer";

const MusicSamples: React.FC = () => {
  // State and logic for the music player will go here
  return (
    <section className="block music-samples-block container">
      <AudioPlayer />
    </section>
  );
};

export default MusicSamples;
