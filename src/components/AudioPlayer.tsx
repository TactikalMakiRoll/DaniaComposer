// AudioPlayer.tsx

import Timeline from "./Timeline";
import VolumeSlider from "./VolumeSlider";
import { Audio, useVisualizer, formatTime } from "@sina_byn/re-audio";
import { useState, useEffect } from "react";
import IconPlayerPauseFilled from "./player_buttons/IconPlayerPauseFilled";
import IconPlayerPlayFilled from "./player_buttons/IconPlayerPlayFilled";
import IconPlayerTrackNextFilled from "./player_buttons/IconPlayerTrackNextFilled";
import IconPlayerTrackPrevFilled from "./player_buttons/IconPlayerTrackPrevFilled";
import IconLowerVolume from "./player_buttons/IconLowerVolume";
import TrackItem, { type Track } from "./TrackItem";

import viridLands from "../assets/music/Virid Lands.mp3";
import watchingTheSolarPulse from "../assets/music/Watching the Solar Pulse.mp3";
import restoreTheLight from "../assets/music/Restore the Light.mp3";
import skyboundRoads from "../assets/music/Skybound Roads.mp3";
import hollowHomeShatteredPast from "../assets/music/Hollow Home Shattered Past.mp3";
import gravity from "../assets/music/Gravity.mp3";
import payback from "../assets/music/Payback.mp3";
import patissier from "../assets/music/Pâtissier.mp3";
import wardenOfTheWoods from "../assets/music/Warden of the Woods.mp3";
import triumph from "../assets/music/Triumph.mp3";
import littleThieves from "../assets/music/Little Thieves.mp3";
import genesis from "../assets/music/Genesis.mp3";
import motives from "../assets/music/Motives.mp3";
import watatsumi from "../assets/music/Watatsumi.mp3";

const Visualizer = () => {
  const analyserRef = useVisualizer(32);
  const [frame, setFrame] = useState<number[]>(
    analyserRef.current.getFrequencyData()
  );

  useEffect(() => {
    let animationFrameId: number;

    const updateFrame = () => {
      setFrame(analyserRef.current.getFrequencyData());
      animationFrameId = requestAnimationFrame(updateFrame);
    };

    updateFrame();

    return () => {
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="visualizer-container">
      {frame.map((f, index) => (
        <div
          key={index}
          style={{ height: `${(f / 255) * 100}%` }}
          className="visualizer-bar"
        />
      ))}
    </div>
  );
};

const AudioPlayer = () => {
  return (
    <Audio
      playlist={[
        { id: 1, src: viridLands, name: "Virid Lands", duration: 84 },
        {
          id: 2,
          src: watchingTheSolarPulse,
          name: "Watching the Solar Pulse",
          duration: 213,
        },
        {
          id: 3,
          src: restoreTheLight,
          name: "Restore the Light",
          duration: 163,
        },
        { id: 4, src: skyboundRoads, name: "Skybound Roads", duration: 154 },
        {
          id: 5,
          src: hollowHomeShatteredPast,
          name: "Hollow Home Shattered Past",
          duration: 254,
        },
        { id: 6, src: gravity, name: "Gravity", duration: 153 },
        { id: 7, src: payback, name: "Payback", duration: 210 },
        { id: 8, src: patissier, name: "Pâtissier", duration: 182 },
        {
          id: 9,
          src: wardenOfTheWoods,
          name: "Warden of the Woods",
          duration: 141,
        },
        { id: 10, src: triumph, name: "Triumph", duration: 172 },
        {
          id: 11,
          src: littleThieves,
          name: "Little Thieves",
          duration: 151,
        },
        { id: 12, src: genesis, name: "Genesis", duration: 211 },
        { id: 13, src: motives, name: "Motives", duration: 96 },
        { id: 14, src: watatsumi, name: "Watatsumi", duration: 152 },
      ]}
    >
      {({
        trackIndex,
        playlist,
        playing,
        togglePlay,
        duration,
        currentTime,
        volume,
        setVolume,
        prevTrack,
        nextTrack,
        setCurrentTime,
        playTrack,
      }) => (
        <div className="music-player-container">
          <div>
            <div className="visualizer-container">
              <Visualizer />
            </div>
            <div className="player-container">
              <div className="player-track-name">
                <p className="capitalize">
                  {/* @ts-ignore */}
                  {playlist[trackIndex].name.split(/-/).join(" ")}
                </p>
                <p className="player-track-time">{formatTime(currentTime)}</p>
              </div>

              <div className="player-buttons">
                <button className="player-button " onClick={prevTrack}>
                  <IconPlayerTrackPrevFilled className="player-icon" />
                </button>

                <button
                  className="player-button player-button-main"
                  type="button"
                  onClick={togglePlay}
                >
                  {playing ? (
                    <IconPlayerPauseFilled className="player-control-icon2" />
                  ) : (
                    <IconPlayerPlayFilled className="player-control-icon" />
                  )}
                </button>

                <button
                  className="player-button"
                  type="button"
                  onClick={nextTrack}
                >
                  <IconPlayerTrackNextFilled className="player-icon" />
                </button>
              </div>

              <div className="player-volume">
                <div className="">
                  <IconLowerVolume className="player-icon" />
                  <VolumeSlider volume={volume} setVolume={setVolume} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <Timeline
              currentTime={currentTime}
              duration={duration}
              setCurrentTime={setCurrentTime}
            />
          </div>

          {/* Track List Section */}
          <div className="track-list-section">
            <div className="track-list">
              {playlist.map((track, index) => (
                <TrackItem
                  key={track.id}
                  track={track as unknown as Track}
                  trackNumber={index + 1}
                  isPlaying={trackIndex === index && playing}
                  isCurrentTrack={trackIndex === index}
                  onTrackClick={playTrack}
                  togglePlay={togglePlay}
                  currentTime={currentTime}
                  duration={duration}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </Audio>
  );
};

export default AudioPlayer;
