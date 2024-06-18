import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import Calendar CSS
import "./EventCard.css"; // Import custom CSS

const EventCard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState([
    {
      date: "2024-06-15",
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      date: "2024-06-16",
      title: "Fathers Day",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      date: "2024-06-25",
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const foundEvent = events.find((event) => event.date === today);
    if (foundEvent) {
      setSelectedDate(new Date(today));
    }
  }, [events]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleViewChange = ({ activeStartDate }) => {
    setCurrentMonth(activeStartDate.getMonth());
  };

  const handleEventAdd = () => {
    const newEvent = {
      date: selectedDate.toISOString().split("T")[0],
      title: "New Event",
      description: "This is a new event.",
    };
    setEvents([...events, newEvent]);
  };

  const filteredEvents = events.filter(
    (event) => new Date(event.date).getMonth() === currentMonth
  );

  return (
    <div className="event-card-container">
      <div className="header">
        <div className="events-list">
          {filteredEvents.map((event) => (
            <div key={event.date} className="event-list-item">
              <span className="event-date">{event.date}</span>
              <span className="event-title">{event.title}</span>
            </div>
          ))}
        </div>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          selectRange={false}
          onActiveStartDateChange={handleViewChange}
          tileContent={({ date, view }) => {
            const foundEvent = events.find(
              (event) => event.date === date.toISOString().split("T")[0]
            );
            if (foundEvent) {
              return <div>{foundEvent.title}</div>;
            }
            return null;
          }}
        />
        <button onClick={handleEventAdd}>Add Event</button>
      </div>
      <div className="events-detail-list">
        {filteredEvents.map((event) => (
          <div key={event.date} className="event-card">
            <div className="date">{event.date}</div>
            <div className="details">
              <h3>{event.title}</h3>
              <div className="scrollable-content">
                <p>{event.description}</p>
                <p>Last updated 3 min ago</p>
                {/* Add more content here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
