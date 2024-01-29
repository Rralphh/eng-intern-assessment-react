import React from 'react';

interface StopwatchProps {
    time: number;
}

const Stopwatch: React.FC<StopwatchProps> = ({ time }) => {
    const formatTime = (time: number): string => {
        const milliseconds = `0${Math.floor(time / 10) % 100}`.slice(-2);
        const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
        const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return <div>{formatTime(time)}</div>;
}

export default Stopwatch;
