import React from "react";
import "../styles/events.css";
import welcomeDayImage from "../images/welcome_day.png"
import sisterHikeImage from "../images/sisters_hike.png"
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
        <img src={welcomeDayImage} alt="Welcome Day" />
        <div className="event-text">
          <h3>MSA Welcome Day</h3>
          <p>Wednesday, September 18th</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSekzvmzwnbGak-1Wo8CIJ2hw_mqjn2AsDkwPPxrDqY_yAEwSQ/viewform"
            className="register-button"
          >
            RSVP Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={sisterHikeImage} alt="Sister's Guided Hike" />
        <div className="event-text">
          <h3>Sister's Guided Hike</h3>
          <p>Thursday, September 19th</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScDJppz9NAcedGb1IO2DNZv7hh-_syvxxPp5yxyMwbB8Wxk0Q/viewform" className="register-button">
            Register Here
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
