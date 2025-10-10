import React from "react";
// import showReelVideo from "../assets/showreel.mp4";

const ShowReel: React.FC = () => {
  return (
    <section className="block show-reel-block container">
      <h2>Showreel</h2>
      {/* In a real project, you'd import the video file */}
      <video controls className="show-reel-video">
        <source src={".."} type="video/mp4" />
        Your browser does not suppo rt the video tag.
      </video>
    </section>
  );
};

export default ShowReel;
