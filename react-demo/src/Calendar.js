import { useRef, useState } from "react";
import {RiDeleteBin6Fill , RiArrowRightCircleLine , RiArrowLeftCircleLine , RiCloseLine } from "react-icons/ri" ;
import InputDialog from "./InputDialog";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {Switch} from "antd" ; 
import {
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
  StyledEvent,
  PortalWrapper
} from "./Calendar.styled";
import { DAYS, MOCKAPPS } from "./const";
import {
  datesAreOnSameDay,
  getDaysInMonth,
  getMonthYear,
  getSortedDays,
  nextMonth,
  prevMonth,
} from "./utils";

 const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  const doctorId = new URLSearchParams(window.location.search).get("doctorId");



  const fetchEvents = () => {
    axios
      .get(`http://localhost:8800/getSchedule?doctorId=${doctorId}`)
      .then((response) => {
        const data = response.data.map((event) => {
          // Convert the stored UTC date to the user's local time zone for display
          const localDate = new Date(event.date);
          console.log(localDate + "fetchevent")
          return {
            ...event,
            date: localDate,
          };
        });
        setEvents(data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  };
  

  useEffect(() => {
    fetchEvents();
  }, []);

 

  const addEvent = (date ,event  ) => {
    const eventsOnDate = events.filter((ev) => datesAreOnSameDay(ev.date, date));
    
    
    if (!event.target.classList.contains("StyledEvent") && eventsOnDate.length < 2 ) {
    
      setIsDialogOpen(true);
      setSelectedDate(date); }
    
  };



const handleSwitchChange = (checked) => {
  console.log("Switch state changed:", checked);
};

const handleConfirmEvent = (branch, startTime, endTime) => {
  if (selectedDate && branch && startTime && endTime) {
    const branchToColor = {
      Smouha: '#238783',
      Fouad: '#238789',
    };
    const color = branchToColor[branch];

    // Convert the selectedDate to UTC
    const utcDate = new Date(Date.UTC(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    ));

    console.log(utcDate);

    // Get the doctorId from the URL
    const doctorId = new URLSearchParams(window.location.search).get('doctorId');

    axios.post('http://localhost:8800/addEvent', {
      selectedDate: utcDate.toUTCString(), // Send the UTC date as a string to the backend
      branch,
      startTime,
      endTime,
      doctorId,
    })
      .then((response) => {
        console.log('Event added successfully:', response.data);

        const event = {
          date: utcDate,
          title: [branch, ' ', startTime, '-', endTime],
          color,
          isAvailable: true,
        };
        console.log(event.date + "handleconfirm");
        setEvents((prevEvents) => [...prevEvents, event]);
        setSelectedDate(null);
        setIsDialogOpen(false);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message to the user
        console.error('Error adding event:', error);
      });
  }
};


  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

 

  // const handleOnClickEvent = (event) => {
  //   const eventToUpdate = events.find((ev) => ev.title === event.title && datesAreOnSameDay(ev.date, event.date));
  //   setShowPortal(true);
  //   setPortalData({
  //     ...eventToUpdate, isAvailable: eventToUpdate.isAvailable 
  //   });
  //   console.log(portalData)
  // };

  
 const handleOnClickEvent = (event) => {
    setShowPortal(true);
    setPortalData(event);
    console.log(portalData);
  };




  const handlePortalClose = () => setShowPortal(false);

  const handleDelete = () => {
    if (portalData) {
      // Extract the necessary information from portalData
      const { title, date } = portalData;
  
      // Split the title by '-' to get startTime and endTime
      const [branch, timeRange] = title.split(' ');
      const [startTime, endTime] = timeRange.split('-');
  
      // Convert the selected date to UTC
      const utcDate = date.toUTCString();
  
      // Get the doctorId from the URL
      const doctorId = new URLSearchParams(window.location.search).get('doctorId');
  
      // Make the Axios POST request to delete the event
      axios.post('http://localhost:8800/deleteEvent', {
        doctorId,
        selectedDate: utcDate,
        branch,
        startTime,
        endTime,
      })
      .then((response) => {
        console.log('Event deleted successfully:', response.data);
  
        // Update the events list in your component to reflect the deletion
        setEvents((prevEvents) =>
          prevEvents.filter((ev) => ev.title !== portalData.title && ev.date !== portalData.date)
        );
  
        // Close the portal
        handlePortalClose();
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message to the user
        console.error('Error deleting event:', error);
      });
    }
  };
  
  

  const toggleAvailability = () => {
    
    const updatedEvents = events.map((ev) =>
    ev.date === portalData.date && ev.title === portalData.title
      ? { ...ev, isAvailable: !ev.isAvailable }
      : ev
  );

  console.log(updatedEvents);
  setEvents(updatedEvents);
 


};



  return (
    <Wrapper>
      {/* <button onClick={() => setIsRecDialogOpen(true)}>add event</button> */}
      <DateControls>
        
        <button
          onClick={() => prevMonth(currentDate, setCurrentDate)}
          name="arrow-back-circle-outline"
        > <RiArrowLeftCircleLine/></button>
        {getMonthYear(currentDate)}
        <button
          onClick={() => nextMonth(currentDate, setCurrentDate)}
          name="arrow-forward-circle-outline"
        > <RiArrowRightCircleLine/></button>
      </DateControls>
      <SevenColGrid>
        {DAYS.map((day) => (
          <HeadDays className="nonDRAG">{day}</HeadDays>
        ))}
      </SevenColGrid>

      <SevenColGrid
        fullheight={true}
        is28Days={getDaysInMonth(currentDate) === 28}
      >
        {getSortedDays(currentDate).map((day) => (
          <div
            id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}

           

            onClick={(e) =>
              addEvent(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  day
                ),
                e
              ) }
         
          >
            <span
              className={`nonDRAG ${
                datesAreOnSameDay(
                  new Date(),
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  )
                )
                  ? "active"
                  : ""
              }`}
            >
              {day}
            </span>
            <EventWrapper>
              {events.map(
                (ev, index) =>
                  datesAreOnSameDay(
                    ev.date,
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      day
                    )
                  ) && (
                    <StyledEvent 
                      onClick={() => handleOnClickEvent(ev)}
                      className="StyledEvent"
                      id={`${ev.color} ${ev.title}`}
                      key={ev.title}
                      bgColor={ev.color}
                    >
                      {ev.title}
                    </StyledEvent>
                  )
              )}
            </EventWrapper>
          </div>
        ))}
        
        
      </SevenColGrid>
      {isDialogOpen && (
        <PortalWrapper>
        <InputDialog
          onClose={handleDialogClose}
          onConfirm={handleConfirmEvent}
        />
        </PortalWrapper>
      )}
      {showPortal && (
        <Portal
          {...portalData}
          isAvailable={portalData.isAvailable}
          toggleAvailability={toggleAvailability}
          handleSwitchChange = {handleSwitchChange}
          handleDelete={handleDelete}
          handlePortalClose={handlePortalClose}
        />
      )}

    </Wrapper>
  );
};

export default Calendar ;

const EventWrapper = ({ children }) => {
  if (children.filter((child) => child).length)
    return (
      <>
        {children}
      </>
    );
};

const Portal = ({ title, date , isAvailable ,  handleDelete, handlePortalClose , toggleAvailability }) => {

  

 
 
  return (
    <PortalWrapper>
      <h2>{title}</h2>
      <p>{date.toDateString()}</p>
      <div>


    <Switch 
          checked={isAvailable}
          onChange={toggleAvailability}
          disabled={false}  />
      </div>
      
      <button onClick={handleDelete} name="trash-outline"> <RiDeleteBin6Fill/> </button>
      <button onClick={handlePortalClose} name="close-outline"> <RiCloseLine/> </button>
    </PortalWrapper>
  );
};



