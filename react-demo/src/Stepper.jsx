import React, { useState } from 'react';

const Stepper = ({ activeStep }) => {
    const steps = ['Bronze', 'Silver', 'Platinum']; // Replace with your step names
  
    return (
      <div className="stepper-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`stepper-circle ${index <= activeStep ? 'completed' : ''}`}
          >
            {index < activeStep ? <span>&#10003;</span> : step.charAt(0)}
          </div>
        ))}
        {/* Render a line between steps */}
        <div className="stepper-line"></div>
      </div>
    );
  };

export default Stepper;