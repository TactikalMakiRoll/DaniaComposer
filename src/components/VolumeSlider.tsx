import React, { useRef, useCallback } from "react";

interface VolumeSliderProps {
  volume: number;
  setVolume: (volume: number) => void;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({ volume, setVolume }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleVolumeUpdate = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
      if (sliderRef.current) {
        const { left, width } = sliderRef.current.getBoundingClientRect();
        const clickX = e.clientX - left;
        const newVolume = (clickX / width) * 100;
        setVolume(Math.max(0, Math.min(newVolume, 100)));
      }
    },
    [setVolume]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleVolumeUpdate(e);

    const onMouseMove = (moveEvent: MouseEvent) => {
      handleVolumeUpdate(moveEvent);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const progress = volume;

  return (
    <div
      ref={sliderRef}
      className="player-volume-slider"
      onMouseDown={handleMouseDown}
    >
      <div
        className="player-volume-slider-progress"
        style={{ width: `${progress}%` }}
      />
      <div
        className="player-volume-slider-thumb"
        style={{ left: `${progress}%` }}
      />
    </div>
  );
};

export default VolumeSlider;
