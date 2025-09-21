import React from "react";

const ShowReel: React.FC = () => {
  return (
    <section className="block show-reel-block container">
      {/* In a real project, you'd import the video file */}
      <video controls>
        <source src="path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default ShowReel;
