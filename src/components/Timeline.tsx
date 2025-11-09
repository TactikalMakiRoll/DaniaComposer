import React, { useRef, useCallback } from "react";

interface TimelineProps {
  currentTime: number;
  duration: number;
  setCurrentTime: (time: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({
  currentTime,
  duration,
  setCurrentTime,
}) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleTimeUpdate = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (timelineRef.current && duration > 0) {
        const { left, width } = timelineRef.current.getBoundingClientRect();
        const clickX = e.clientX - left;
        const newTime = (clickX / width) * duration;
        setCurrentTime(Math.max(0, Math.min(newTime, duration)));
      }
    },
    [duration, setCurrentTime]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleTimeUpdate(e);

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (timelineRef.current && duration > 0) {
        const { left, width } = timelineRef.current.getBoundingClientRect();
        const moveX = moveEvent.clientX - left;
        const newTime = (moveX / width) * duration;
        setCurrentTime(Math.max(0, Math.min(newTime, duration)));
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={timelineRef}
      className="player-timeline"
      onMouseDown={handleMouseDown}
    >
      <div
        className="player-timeline-progress"
        style={{ width: `${progress}%` }}
      />
      <div className="player-timeline-thumb" style={{ left: `${progress}%` }} />
    </div>
  );
};

export default Timeline;
