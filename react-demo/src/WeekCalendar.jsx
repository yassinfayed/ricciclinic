//Calendar.jsx
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function WeekCalendar({ selectedDoctor, extraParam, userInfo, onConfirm}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const [formSubmitted, setIsFormSubmitted] = useState(false);



  useEffect(() => {
    // Fetch the doctor's schedule based on the selectedDoctor when the component mounts
    if (selectedDoctor) {
      axios
        .post('http://localhost:8800/getScheduleForReservation', { doctorName: selectedDoctor, extra: extraParam })
        .then((response) => {
          console.log('Fetched doctor schedule:', response.data);
          setScheduleData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching doctor schedule:', error);
        });
    }
  }, [selectedDoctor]);

  
  const nav = useNavigate();

  const daysInWeek = [];
  const currentDateCopy = new Date(currentDate);

  for (let i = 0; i < 7; i++) {
    const day = new Date(currentDateCopy);
    day.setDate(currentDate.getDate() - currentDate.getDay() + i);
    daysInWeek.push(day);
  }

  

  const handleDayClick = (day) => {
    setSelectedDay(day); // Set the selected day directly
  };

  const handleConfirmClick = () => {
    
    if (userInfo && selectedDay) {
      // Find the matching schedule for the selected day
      const matchingSchedule = scheduleData.find((schedule) => {
        const scheduleDate = new Date(schedule.Date);
        return scheduleDate.toDateString() === selectedDay.toDateString();
      });

      if (matchingSchedule) {
        // Create an object with the data to be sent to the backend
        const requestData = {
          userId: userInfo.id,
          scheduleId: matchingSchedule.Id, // Use the ID from the matching schedule
        };


        axios
          .post('http://localhost:8800/createReservation', requestData)
          .then((response) => {
            // Handle the response from the backend (if needed)
            console.log('Reservation created:', response.data);
            // Clear the selected day after successful reservation
            setSelectedDay(null);
            nav("/confirmreservation");
            
          })
          .catch((error) => {
            console.error('Error creating reservation:', error);
          });
      }
    }
  };

  const goToPreviousWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
    setSelectedDay(null);
    
  };

  const goToNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
    setSelectedDay(null);
  };

  
  const isBeforeToday = (date) => {
    const today = new Date();
    return date < today;
  };

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long' });


  return (
    <div>
      <div className="navigation-buttons">
        <button onClick={goToPreviousWeek} className="but col-lg-2" disabled={isBeforeToday(currentDate) ? 'disabled' : ''}>Previous Week</button>
        <button  className="but col-lg-2" onClick={goToNextWeek}>Next Week</button>
      </div>
  
      <h4>{monthName}</h4>
      <div className="calendar-container">
        {daysInWeek.map((day, index) => {
          const matchingSchedule = scheduleData.find((schedule) => {
            const scheduleDate = new Date(schedule.Date);
            return scheduleDate.toDateString() === day.toDateString();
          });
  
          return (
            <div
                key={index}
                className={`day ${
                  selectedDay && selectedDay.toDateString() === day.toDateString()
                    ? 'selected'
                    : ''
                } ${!matchingSchedule ? 'unavailable' : ''}`}
                onClick={() => handleDayClick(day)}
            >
              <div>
                {day.toLocaleDateString('en-US', { weekday: 'short' })} - {day.getDate()}
              </div>
              {matchingSchedule && (
                <div className="shift-info">
                  {matchingSchedule.StartTime} - {matchingSchedule.EndTime}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="row d-flex justify-content-center">
          <button className="but col-lg-2 my-5" onClick={handleConfirmClick}> Confirm</button>
      </div>
    </div>
  );

}

export default WeekCalendar;