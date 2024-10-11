import React from "react";
import "../styles/events.css";
import circlesInspiration from "../images/circles_inspiration.jpg"
import circlesofFaith from "../images/circles_of_faith.png"
import kayaking from "../images/kayaking.png"

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
        <img src={circlesInspiration} alt="Circles of Inspiration" />
        <div className="event-text">
          <h3>Circles of Inspiration</h3>
          <p>Friday, October 11th, 18th</p>
          <a
            href=""
            className="register-button"
          >
            Drop In
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={circlesofFaith} alt="Circles of Faith" />
        <div className="event-text">
          <h3>Circles of Faith - Sister's Halaqah</h3>
          <p>Tuesday, October 22nd</p>
          <a href="" className="register-button">
            Drop In
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={kayaking} alt="Kayaking" />
        <div className="event-text">
          <h3>Kayaking</h3>
          <p>Sunday, September 29th</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZ3nmQXPxa8O1GsuOBbrOHq8-so-md5OcZ_3TSmxepbSxKEQ/viewform" className="register-button">
            Register Here
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
