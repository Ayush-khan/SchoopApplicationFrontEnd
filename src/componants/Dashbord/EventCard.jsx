// EventCard.js
// EventCard.js

// import React, { useState, useEffect } from "react";
// import "./EventCard.css"; // Import custom CSS
// import axios from "axios"; // Import Axios for HTTP requests

// const EventCard = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

//   const months = [
//     { value: 0, label: "January" },
//     { value: 1, label: "February" },
//     { value: 2, label: "March" },
//     { value: 3, label: "April" },
//     { value: 4, label: "May" },
//     { value: 5, label: "June" },
//     { value: 6, label: "July" },
//     { value: 7, label: "August" },
//     { value: 8, label: "September" },
//     { value: 9, label: "October" },
//     { value: 10, label: "November" },
//     { value: 11, label: "December" },
//   ];

//   useEffect(() => {
//     fetchEvents(selectedMonth);
//   }, [selectedMonth]);

//   const fetchEvents = async (month) => {
//     try {
//       // Replace with your backend API endpoint
//       const response = await axios.get(`/api/events?month=${month}`);
//       setEvents(response.data); // Assuming the API response is an array of events
//     } catch (error) {
//       console.error("Error fetching events:", error);
//       // Handle error state or fallback
//     }
//   };

//   const handleMonthChange = (e) => {
//     setSelectedMonth(parseInt(e.target.value, 10));
//   };

//   return (
//     <div className="event-card-container">
//       <div className="header">
//         <select value={selectedMonth} onChange={handleMonthChange}>
//           {months.map((month) => (
//             <option key={month.value} value={month.value}>
//               {month.label} {new Date().getFullYear()}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="events-list">
//         {events.map((event, index) => (
//           <div key={index} className="event-card">
//             <div className="date">
//               {new Date(event.date).getDate()}{" "}
//               {new Date(event.date).toLocaleString("default", {
//                 month: "long",
//               })}
//               <br />
//               10:10 am
//             </div>
//             <div className="details">
//               <h3>{event.title}</h3>
//               <div className="scrollable-content">
//                 <p>{event.description}</p>
//                 <p>Last updated 3 min ago</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// import React, { useState } from "react";
// import "./EventCard.css";
// import { MdOutlineArrowDropDown } from "react-icons/md";

// const EventCard = () => {
//   const [events, setEvents] = useState([
//     {
//       date: "2024-05-15",
//       title: "Card title",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-05-15",
//       title: "Card title",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-05-15",
//       title: "Card title",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-05-15",
//       title: "Card title",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-05-15",
//       title: "Card title",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-05-15",
//       title: "Card title",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-06-15",
//       title: "Card title",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-06-16",
//       title: "Fathers Day",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-06-16",
//       title: "Fathers Day",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-06-16",
//       title: "Fathers Day",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-06-16",
//       title: "Fathers Day",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-06-25",
//       title: "Card title",
//       description:
//         "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//     },
//     {
//       date: "2024-07-05",
//       title: "Summer Event",
//       description:
//         "Enjoy the summer with our special event. This is a longer description for the event.",
//     },
//     {
//       date: "2024-07-10",
//       title: "Another Event",
//       description:
//         "Another event description goes here. It's a bit longer to see the scrollable effect.",
//     },
//     {
//       date: "2024-08-20",
//       title: "August Event",
//       description:
//         "Event happening in August. This card has a longer description for testing scroll.",
//     },
//   ]);

//   const months = [
//     { value: 0, label: "January" },
//     { value: 1, label: "February" },
//     { value: 2, label: "March" },
//     { value: 3, label: "April" },
//     { value: 4, label: "May" },
//     { value: 5, label: "June" },
//     { value: 6, label: "July" },
//     { value: 7, label: "August" },
//     { value: 8, label: "September" },
//     { value: 9, label: "October" },
//     { value: 10, label: "November" },
//     { value: 11, label: "December" },
//   ];

//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

//   const handleMonthChange = (e) => {
//     setSelectedMonth(parseInt(e.target.value, 10));
//   };

//   const filteredEvents = events.filter(
//     (event) => new Date(event.date).getMonth() === selectedMonth
//   );

//   return (
//     <div
//       className={`${"event-card-container"} border-2 border-solid  h-64  bg-slate-50 `}
//     >
//       <div
//         className={`${"header"}  `}

//       >
//         <select value={selectedMonth} onChange={handleMonthChange}>
//           {months.map((month) => (
//             <option key={month.value} value={month.value}>
//               {" "}

//               {month.label} {new Date().getFullYear()}
//             </option>
//           ))}
//         </select>
//         <hr style={{ marginTop: "4px", width: "9em" }}></hr>
//       </div>
//       <div className={`${"events-list"} rounded-lg pb-20 bg-gray-100`}>
//         {filteredEvents.map((event, index) => (
//           <div key={index} className={`${"event-card"} rounded-lg mt-2 `}>
//             <div
//               className={`${"date"} bg-gray-500 h-full text-slate-50 text-md`}
//             >
//               {new Date(event.date).getDate()}{" "}
//               {new Date(event.date).toLocaleString("default", {
//                 month: "long",
//               })}
//               <br />
//               10:10 am
//             </div>
//             <div className={`${"details"}`}>
//               <h5
//                 style={{
//                   fontSize: "1.3em",
//                   fontWeight: "550",
//                   marginTop: "1.8em",

//                 }}
//               >
//                 {event.title}
//               </h5>
//               <div className="mb-3">
//                 <p style={{ fontSize: "1.1em", paddingBottom: "0px" }}>
//                   {event.description}
//                 </p>
//                 <p
//                   style={{
//                     fontSize: "11px",
//                     color: "gray",
//                     paddingBottom: "0px",
//                   }}
//                 >
//                   Last updated 3 min ago
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCard;

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
              className={`${Styles.date} bg-gray-500 h-full text-slate-50 text-md rounded-lg`}
              // style={{ backgroundColor: "#8C56A6" }}
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
                  color: "#6B7280",
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
