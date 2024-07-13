// src/components/EventsCalendar.js
import React from "react";
import "../styles/eventsCalendar.css";

const EventsCalendar = () => (
  <section id="events-calendar">
    <h2 className="event-title">Events Calendar</h2>
    <p className="event-description">
      Check out the calendar below to see the dates of our programs and events.
    </p>
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=f85949e4339576e4e810a540099d69489abd9235981f0900c683720702172fae%40group.calendar.google.com&ctz=America%2FToronto"
        style={{ border: "solid 1px #777" }}
        width="1100"
        height="800"
        frameBorder="0"
        scrolling="no"
        title="Events Calendar"
      ></iframe>
    </div>
  </section>
);

export default EventsCalendar;
