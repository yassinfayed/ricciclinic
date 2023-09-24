import React, { useState } from "react";

const InputDialog = ({ onClose, onConfirm }) => {
  const [branch, setBranch] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleConfirm = () => {
    if (branch && startTime && endTime) {
      onConfirm(branch, startTime ,endTime);
      onClose();
    }
  };
  const handleClose = () => {
    onClose();
  }

  return (
    <div className="input-dialog">
      <h2>Enter Event Details</h2>
      <select
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      >
        <option value="">Select Branch</option>
        <option value="Smouha">Smouha</option>
        <option value="Fouad">Fouad</option>
        
      </select>
      <select
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      >
        <option value="">Select Start Time</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        
      </select>
      <select
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      >
        <option value="">Select End Time</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleClose}>close</button>
      
    </div>
  );
};

export default InputDialog;