/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

describe('Stopwatch Tests', () => {
    test('stopwatch starts when start button is clicked', () => {
        render(<App />);
        const startButton = screen.getByText('Start');
        fireEvent.click(startButton);
        expect(screen.getByTestId('stop')).toBeTruthy();
        expect(screen.getByTestId('stopwatch')).not.toContain('00:00:00');
    });

    test('stopwatch stops when stop button is clicked', () => {
        render(<App />);
        const startButton = screen.getByTestId('start');
        fireEvent.click(startButton);
        const stopButton = screen.getByTestId('stop');
        fireEvent.click(stopButton);
        expect(screen.getByTestId('start')).toBeTruthy();
    });

    test('stopwatch resets when reset button is clicked', () => {
        render(<App />);
        const startButton = screen.getByTestId('start');
        fireEvent.click(startButton);
        const resetButton = screen.getByTestId('reset');
        fireEvent.click(resetButton);
        const timeDisplay = screen.getByText('00:00:00');
        expect(timeDisplay).toBeTruthy();
    });

    test('stopwatch records laps', () => {
        render(<App />);
        const startButton = screen.getByTestId('start');
        fireEvent.click(startButton);
        const lapButton = screen.getByTestId('lap');
        fireEvent.click(lapButton);
        const lapRecord = screen.getByText(/Lap 1:/i);
        expect(lapRecord).toBeTruthy();
    });
});
