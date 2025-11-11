import React from "react";
import IconPlayerPauseFilled from "./player_buttons/IconPlayerPauseFilled";
import IconPlayerPlayFilled from "./player_buttons/IconPlayerPlayFilled";
import { formatTime } from "@sina_byn/re-audio";

export interface Track {
  id: number;
  src: string;
  name: string;
  duration: number;
}

export interface TrackItemProps {
  track: Track;
  trackNumber: number;
  isPlaying: boolean;
  isCurrentTrack: boolean;
  onTrackClick: (index: number) => void;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
}

const TrackItem: React.FC<TrackItemProps> = ({
  track,
  trackNumber,
  isPlaying,
  isCurrentTrack,
  onTrackClick,
  togglePlay,
  currentTime,
  duration,
}) => {
  const handleTrackClick = () => {
    if (isCurrentTrack) {
      togglePlay();
    } else {
      onTrackClick(trackNumber - 1);
    }
  };

  return (
    <div
      className={`playlist-track ${isCurrentTrack ? "current-track" : ""} ${
        isPlaying && isCurrentTrack ? "active" : ""
      }`}
      tabIndex={0}
      aria-label={`Play track number ${trackNumber}: ${track.name}`}
      onClick={handleTrackClick}
    >
      <div className="track-control-wrapper">
        <span className="play">
          {isPlaying && isCurrentTrack ? (
            <IconPlayerPauseFilled className="player-icon" />
          ) : (
            <IconPlayerPlayFilled className="player-icon player-icon-play" />
          )}
        </span>
      </div>
      <div className="track-name" title={track.name}>
        {track.name.split(/-/).join(" ")}
      </div>
      <div className="track-duration">
        {isCurrentTrack ? formatTime(currentTime) : formatTime(track.duration)}
      </div>
    </div>
  );
};

export default TrackItem;
