// CircularProgressBar.js
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgressBar.css'; // Create this CSS file
import { primaryBlue } from '../Static/Colors';

const RedCircularProgressBar = ({ percentage }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);
    useEffect(() => {
        const animationDuration = 1000; // in milliseconds
        let startTime;

        const animateProgress = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;

            if (elapsedTime < animationDuration) {
                setCurrentPercentage(
                    Math.min((percentage * elapsedTime) / animationDuration, percentage)
                );
                requestAnimationFrame(animateProgress);
            } else {
                setCurrentPercentage(percentage);
            }
        };

        requestAnimationFrame(animateProgress);

        return () => {
            setCurrentPercentage(0); // Reset progress when component unmounts
        };
    }, [percentage]);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <CircularProgressbar
                value={currentPercentage}
                text={`${Math.round(currentPercentage)}%`}
                styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(255, 0, 0, ${currentPercentage / 100})`,
                    textColor: 'black',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            />
        </div>

    );
};

export default RedCircularProgressBar;
