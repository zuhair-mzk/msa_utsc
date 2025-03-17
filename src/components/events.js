import React from "react";
import "../styles/events.css";

import ramadan_checkin from "../images/mid_ramadan_checkin.png"
import iftar_and_chill from "../images/iftar_and_chill.png"
import grandiftar from "../images/Grand Iftar Posts.png"

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
        <img src={ramadan_checkin} alt="Mid Ramadan Check In" />
        <div className="event-text">
          <h3>Mid Ramadan Check In</h3>
          <p>Wednesday, March 12th</p>
          <a target="_blank" href="" className="register-button">
            Drop In
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={iftar_and_chill} alt="Iftar and Chill" />
        <div className="event-text">
          <h3>Iftar and Chill Movie Night</h3>
          <p>Wednesday, March 12th</p>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScKemzNC-HvtnmqrAGMkmU0aOUWHi-DjEZFPo5neN_W9X-B-Q/closedform" className="register-button">
            Register Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={grandiftar} alt="Grand Iftar" />
        <div className="event-text">
          <h3>MSA Grand Iftar</h3>
          <p>Sunday, March 16th</p>
          <a target="_blank" href="https://www.zeffy.com/en-CA/ticketing/2025-grand-iftaar" className="register-button">
            Register Here
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
