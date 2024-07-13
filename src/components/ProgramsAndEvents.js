// src/components/ProgramsAndEvents.js
import React from "react";
import "../styles/programsAndEvents.css";
import Announcements from "./Announcements";
import EventsSection from "./events";
import Programs from "./Programs";
import OSP from "./OSP";
import EventsCalendar from "./EventsCalendar";

const ProgramsAndEvents = () => (
  <section id="programs-events-page">
    <Announcements />
    <EventsSection />
    <Programs />
    <EventsCalendar />
    <OSP />
  </section>
);

export default ProgramsAndEvents;
