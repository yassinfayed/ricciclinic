import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Make sure to import the styles

const CircularProgressBarExample = () => {
  const percentage = 90; // Replace with your progress percentage

  return (
    <div className="circular-progress-container">
      <CircularProgressbar
        value={percentage}
        text={`${percentage} points`}
        className="custom-circular-progress"
      />
    </div>
  );
};

export default CircularProgressBarExample;
