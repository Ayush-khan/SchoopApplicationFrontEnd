import React, { useState } from "react";
import Styles from "./EventCard.module.css"; // Import CSS module
import { MdOutlineArrowDropDown } from "react-icons/md";

const EventCard = () => {
  const [events, setEvents] = useState([
    {
      date: "2024-05-15",
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
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
    {
      date: "2024-07-05",
      title: "Summer Event",
      description:
        "Enjoy the summer with our special event. This is a longer description for the event.",
    },
    {
      date: "2024-07-10",
      title: "Another Event",
      description:
        "Another event description goes here. It's a bit longer to see the scrollable effect.",
    },
    {
      date: "2024-08-20",
      title: "August Event",
      description:
        "Event happening in August. This card has a longer description for testing scroll.",
    },
  ]);

  const months = [
    { value: 0, label: "January" },
    { value: 1, label: "February" },
    { value: 2, label: "March" },
    { value: 3, label: "April" },
    { value: 4, label: "May" },
    { value: 5, label: "June" },
    { value: 6, label: "July" },
    { value: 7, label: "August" },
    { value: 8, label: "September" },
    { value: 9, label: "October" },
    { value: 10, label: "November" },
    { value: 11, label: "December" },
  ];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value, 10));
  };

  const filteredEvents = events.filter(
    (event) => new Date(event.date).getMonth() === selectedMonth
  );

  return (
    <div
      className={`${Styles.eventCardContainer} border-2 border-solid h-64 bg-slate-100`}
    >
      <div
        className={Styles.header}
        style={{
          fontWeight: "800",
          fontSize: "1.3em",
        }}
      >
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className={Styles.monthSelect}
          style={{
            backgroundColor: "transparent",
            color: "#6B7280",
            // color: "#A74592",
            // color: "#3689E4",
          }}
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label} {new Date().getFullYear()}
            </option>
          ))}
        </select>
        <hr
          style={{
            marginTop: "0px",
            marginLeft: "7px",
            width: "6.5em",
            textAlign: "center",
          }}
        />
      </div>
      <div className={`${Styles.eventsList} rounded-lg pb-20 bg-gray-100`}>
        {filteredEvents.map((event, index) => (
          <div key={index} className={`${Styles.eventCard} rounded-lg mt-2 `}>
            <div
              className={`${Styles.date} bg-gray-500 h-full text-cyan-900 text-md rounded-lg`}
              style={{ backgroundColor: "#00FFFF" }}
            >
              {new Date(event.date).getDate()}{" "}
              {new Date(event.date).toLocaleString("default", {
                month: "long",
              })}
              <br />
              10:10 am
            </div>
            <div className={Styles.details}>
              <h5
                style={{
                  fontSize: "1.2em",
                  fontWeight: "550",
                  marginTop: "1em",
                  color: "#00FFFF",
                }}
              >
                {event.title}
              </h5>
              <div className="mb-3">
                <p
                  style={{
                    fontSize: "1.1em",
                    paddingBottom: "0px",
                    marginBottom: "2px",
                  }}
                >
                  {event.description}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "gray",
                    marginTop: "5px",
                    marginBottom: "-10px",
                  }}
                >
                  Last updated 3 min ago
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
