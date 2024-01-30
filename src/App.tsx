import React, { useState, useEffect } from "react";
import Stopwatch from "./Stopwatch";
import StopwatchButton from "./StopwatchButton";
import "./App.css";

export default function App() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };
  const handleLap = () => setLaps([...laps, time]);

  return (
    <div className="app">
      <Stopwatch time={time} />
      <StopwatchButton
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        onLap={handleLap}
        running={isRunning}
      />
      {laps.length > 0 && ( // when lap button is pressed at least once display laps
        <ul className="laps">
          {laps.map((lap, index) => (
            <li key={index} className="lap">
              Lap {index + 1}: {lap} ms
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
