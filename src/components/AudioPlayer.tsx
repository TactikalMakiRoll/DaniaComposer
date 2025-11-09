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
import enemy from "../assets/music/Enemy.mp3";
import polka from "../assets/music/Polka.mp3";

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
    <div className="flex items-end justify-center gap-x-1 h-28 overflow-x-hidden">
      {frame.map((f, index) => (
        <div
          key={index}
          style={{ height: `${(f / 255) * 100}%` }}
          className="w-1.5 min-h-2.5 bg-white/50 rounded-t-full"
        />
      ))}
    </div>
  );
};

const AudioPlayer = () => {
  return (
    <Audio
      playlist={[
        { id: 1, src: enemy, name: "Enemy" },
        { id: 2, src: polka, name: "Polka" },
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
      }) => (
        <div className="music-player-container">
          <div>
            <div className="player-container">
              <div className="player-track-name">
                <p className="capitalize">
                  {/* @ts-ignore */}
                  {playlist[trackIndex].name.split(/-/).join(" ")}
                </p>
                <p>{formatTime(currentTime)}</p>
              </div>

              <div className="player-buttons">
                <button className="player-button" onClick={prevTrack}>
                  <IconPlayerTrackPrevFilled className="player-control-icon" />
                </button>

                <button
                  className="player-button player-button-main"
                  type="button"
                  onClick={togglePlay}
                >
                  {playing ? (
                    <IconPlayerPauseFilled className="player-control-icon" />
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
            </div>
          </div>

          <div>
            <Timeline
              currentTime={currentTime}
              duration={duration}
              setCurrentTime={setCurrentTime}
            />
          </div>

          <div className="player-volume">
            <div className="">
              <IconLowerVolume className="player-icon" />
              <VolumeSlider volume={volume} setVolume={setVolume} />
            </div>
          </div>

          <div className="mt-8">
            <Visualizer />
          </div>
        </div>
      )}
    </Audio>
  );
};

export default AudioPlayer;
