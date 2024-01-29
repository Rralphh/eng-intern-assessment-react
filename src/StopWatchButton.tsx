import React from "react";
import "./StopWatchButton.css";

interface StopwatchButtonProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onLap: () => void;
  running: boolean;
}

const StopwatchButton: React.FC<StopwatchButtonProps> = ({
  onStart,
  onStop,
  onReset,
  onLap,
  running,
}) => {
  return (
    <div className="buttonContainer">
      {!running && (
        <button
          className="button"
          data-testid="start"
          id="start"
          onClick={onStart}
        >
          Start
        </button>
      )}
      {running && (
        <button
          className="button"
          data-testid="stop"
          id="stop"
          onClick={onStop}
        >
          Stop
        </button>
      )}
      <button
        className="button"
        id="reset"
        data-testid="reset"
        onClick={onReset}
      >
        Reset
      </button>
      {running && (
        <button className="button" data-testid="lap" onClick={onLap}>
          Lap
        </button>
      )}
    </div>
  );
};

export default StopwatchButton;
