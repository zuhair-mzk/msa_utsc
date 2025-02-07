import React from "react";
import "../styles/events.css";

import messageCreatives from "../images/event-creative submissions.png"
import IAW1 from "../images/Islam Awareness Week 2025 (1).png"
import islamicPsych from "../images/Islamic Psych.png"

import { HashLink as Link } from "react-router-hash-link";


const EventsSection = () => (
  <section id="events">
    <div className="events-intro">
      <h2 className="event-title">Events</h2>
      <p className="event-p">
        The MSA hosts events throughout the year for all students in the UTSC
        community. Check out the latest events below or visit the link below to
        see all past and future events!
      </p>
      <Link
        to="/programs-events#events-calendar"
        className="view-all-events-button"
      >
        View All Events
      </Link>
    </div>
    <div className="event-card-container">
    <div className="event-card">
        <img src={IAW1} alt="Islamic Awareness Week" />
        <div className="event-text">
          <h3>A History of Muslim Excellence in The Americas</h3>
          <p>Monday, February 10th</p>
          <a target="_blank" href="" className="register-button">
            Drop In
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={islamicPsych} alt="Islamic Psychology: History, Contributions, and Relevance" />
        <div className="event-text">
          <h3>Islamic Psychology: History, Contributions, and Modern Relevance</h3>
          <p>Tuesday, February 11th</p>
          <a target="_blank" href="" className="register-button">
            Drop In
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={messageCreatives} alt="OSP Gala 2025" />
        <div className="event-text">
          <h3>The Message Magazine: Creative Submissions</h3>
          <p>Deadline: Thursday, February 13th</p>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSckJOMOcVbRnQSapWZoQOOquPGteqOIoWFQ1tbc9Fm4SoZVUA/viewform" className="register-button">
            Submit Here
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
