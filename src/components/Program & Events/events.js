import React from "react";
import "../../styles/programs-events/events.css";

import exam_accomadation from "../../images/msa_exam.png"
import gratitude_jar from "../../images/gratitude_jar.png"
import election from "../../images/msa_election.png"

import { HashLink as Link } from "react-router-hash-link";


const EventsSection = () => (
  <section id="events">
    <hr className="section-divider" />
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
        <img src={exam_accomadation} alt="Mid Ramadan Check In" />
        <div className="event-text">
          <h3>Final Exam Accomodations</h3>
          <p>Available from 8 AM to 10 PM</p>
          <a target="_blank" href="" className="register-button">
            Until April 26th
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={election} alt="Iftar and Chill" />
        <div className="event-text">
          <h3>MSA AGM and Elections Timeline</h3>
          <p>Friday, April 18th</p>
          <a target="_blank" href="" className="register-button">
            Follow @msa_utsc for more information
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={gratitude_jar} alt="Grand Iftar" />
        <div className="event-text">
          <h3>Gratitude Jar Making</h3>
          <p>Wednesday, April 9th</p>
          <a target="_blank" href="" className="register-button">
            Drop In
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
