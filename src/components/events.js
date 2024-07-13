import React from "react";
import "../styles/events.css";
import ospImage from "../images/OSP.png"; // Adjust path as needed
import selfDefenceImage from "../images/self-defence.png"; // Adjust path as needed
import skiImage from "../images/Ski.png"; // Adjust path as needed
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
        <img src={ospImage} alt="OSP" />
        <div className="event-text">
          <h3>MSA Petting Zoo</h3>
          <p>Tuesday, February 27th</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd6aFEpRxeyZ7AU1g1IjIhVdmXkkLFqu51bcxw7smQMp3AXug/viewform?pli=1"
            className="register-button"
          >
            Register Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={selfDefenceImage} alt="Self Defense" />
        <div className="event-text">
          <h3>Self Defence</h3>
          <p>Tuesday, February 13th | 1-3pm</p>
          <a href="" className="register-button">
            Register Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={skiImage} alt="Grand Iftar" />
        <div className="event-text">
          <h3>OMSAC Ski Trip</h3>
          <p>Wednesday, February 21st | 7:00pm</p>
          <a href="" className="register-button">
            Register Here
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
