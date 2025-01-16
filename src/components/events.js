import React from "react";
import "../styles/events.css";

import ospHT from "../images/OSP - High Tea.png"
import ospbarber from "../images/osp_barber_aman.png"
import ospGL from "../images/osp_gala_2025.png"

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
        <img src={ospHT} alt="OSP High Tea" />
        <div className="event-text">
          <h3>OSP High Tea for Charity</h3>
          <p>Tuesday, January 14th</p>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScJIK7JEjxvbshDvZJTI-swQujKkZMehuiuyP5D30ULzxSjiQ/viewform" className="register-button">
            Register Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={ospbarber} alt="OSP Barbershop" />
        <div className="event-text">
          <h3>OSP Barbershop</h3>
          <p>Thursday, January 16th</p>
          <a target="_blank" href="" className="register-button">
            Payment In-Person
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={ospGL} alt="OSP Gala 2025" />
        <div className="event-text">
          <h3>OSP Gala</h3>
          <p>Sunday, January 26th</p>
          <a target="_blank" href="https://www.zeffy.com/en-CA/ticketing/utsc-msa-osp-gala--2025" className="register-button">
            Register Here
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
