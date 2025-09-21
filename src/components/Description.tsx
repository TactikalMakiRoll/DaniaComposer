import React from "react";
import photoUrl from "../assets/main_photo1.jpg";

const Description: React.FC = () => {
  return (
    <section className="block description-block container">
      <div className="description-image">
        <img src={photoUrl} alt="Composer" />
      </div>
      <div className="description-text">
        <h2>About Me</h2>
        <p>
          Danylo Dunets (a.k.a. I-Human) is a Ukrainian composer from Mariupol
          who specializes in music for films, video games, and other media. I’m
          equally passionate about creating music in a wide range of genres —
          from dramatic orchestral scores to dark electronic soundscapes, always
          focused on crafting atmospheric and emotional compositions and
          memorable musical themes. I collaborate closely with directors and
          designers to transform their ideas and feedback into music that
          supports the game’s vision. I love music in all its forms — listening
          to it, exploring it, creating it. For me, it’s neither a profession
          nor a hobby, but a way of living and seeing the world — an essential
          part of who I am.
        </p>
      </div>
    </section>
  );
};

export default Description;
