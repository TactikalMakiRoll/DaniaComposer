import React from "react";

// Album cover imports
import hatred from "../assets/albums/hatred.jpg";
import palerunner from "../assets/albums/palerunner.jpg";
import musicForTheGuardiansOfTheNationPt1 from "../assets/albums/music-for-the-guardians-of-the-nation-pt-1.jpg";
import roots from "../assets/albums/roots.jpg";
import nonconformist from "../assets/albums/nonconformist.jpg";
import escapist from "../assets/albums/escapist.jpg";
import solipsist from "../assets/albums/solipsist.jpg";
import maverick from "../assets/albums/maverick.jpg";
import patterns from "../assets/albums/patterns.jpg";
import dive from "../assets/albums/dive.jpg";
import tidalWave from "../assets/albums/tidal-wave.jpg";
import goneWithTheWind from "../assets/albums/gone-with-the-wind.jpg";
import modernClassicalBundlePt2 from "../assets/albums/modern-classical-bundle-pt-2.jpg";
import remedy from "../assets/albums/remedy.jpg";
import modernClassicalBundlePt1 from "../assets/albums/modern-classical-bundle-pt-1.jpg";
import brokenSouls from "../assets/albums/broken-souls.jpg";

const albumData = [
  {
    title: "HATRED",
    image: hatred,
    spotifyUrl: "https://open.spotify.com/album/0P965KOcMRTbos0gzcupDN",
  },
  {
    title: "Palerunner",
    image: palerunner,
    spotifyUrl: "https://open.spotify.com/album/2aT9yFgA9uT5Nr8dGv3VIW",
  },
  {
    title: "Music for the Guardians of the Nation",
    image: musicForTheGuardiansOfTheNationPt1,
    spotifyUrl: "https://open.spotify.com/album/00nKUCnkJyUgDS4rP71vdk",
  },
  {
    title: "Roots",
    image: roots,
    spotifyUrl: "https://open.spotify.com/album/298BSjtb58doSDv4MytmKO",
  },
  {
    title: "Nonconformist",
    image: nonconformist,
    spotifyUrl: "https://open.spotify.com/album/38qlhk0EChkwgt44GAvv3z",
  },
  {
    title: "Escapist",
    image: escapist,
    spotifyUrl: "https://open.spotify.com/album/6U3S0WmN5Yyf44Cblf7D0i",
  },
  {
    title: "Solipsist",
    image: solipsist,
    spotifyUrl: "https://open.spotify.com/album/5idoYpjIL61qPoV7raMmix",
  },
  {
    title: "Maverick",
    image: maverick,
    spotifyUrl: "https://open.spotify.com/album/0ZhFrkMadqFp48CO9DDRpv",
  },
  {
    title: "Patterns",
    image: patterns,
    spotifyUrl: "https://open.spotify.com/album/5P60aCvnvHHIjOpJLwYquo",
  },
  {
    title: "Dive",
    image: dive,
    spotifyUrl: "https://open.spotify.com/album/1dmEwgo1O77QfayFQ9oitT",
  },
  {
    title: "Tidal Wave",
    image: tidalWave,
    spotifyUrl: "https://open.spotify.com/album/57vRy3Env5qvvyEfdileJE",
  },
  {
    title: "Gone with the wind",
    image: goneWithTheWind,
    spotifyUrl: "https://open.spotify.com/album/7GGhokwmnouwS8VenTVqHJ",
  },
  {
    title: "Modern Classical Bundle Pt. 2",
    image: modernClassicalBundlePt2,
    spotifyUrl: "https://open.spotify.com/album/2k4MtOb4n0r9J7Wqyz8E0A",
  },
  {
    title: "Remedy",
    image: remedy,
    spotifyUrl: "https://open.spotify.com/album/4scl4YkXpEIucfM2mrIIIV",
  },
  {
    title: "Modern Classical Bundle, Pt. 1",
    image: modernClassicalBundlePt1,
    spotifyUrl: "https://open.spotify.com/album/14dDmDA1xTyjTeYHZoyPaZ",
  },
  {
    title: "Broken Souls",
    image: brokenSouls,
    spotifyUrl: "https://open.spotify.com/album/5HDkj2EfIolKoShSM0Zk0c",
  },
];

const Albums: React.FC = () => {
  return (
    <div className="container albums-container">
      <h2 className="albumsHeader">Albums</h2>
      <div className="albums">
        {albumData.map((album, index) => (
          <div
            key={`${album.title}-${index}`}
            className="album-item"
            style={{ "--bg-img": `url(${album.image})` } as React.CSSProperties}
          >
            <div className="album-overlay">
              <p className="album-title">{album.title}</p>
              <a
                href={album.spotifyUrl}
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
    </div>
  );
};

export default Albums;
