import React from "react";
import "../styles/events.css";
import osp_why_lemons from "../images/osp_why_lemos.png"
import osp_globe from "../images/osp_globe.png"
import osp_banner from "../images/osp_banner.png"

import ospHT from "../images/OSP - High Tea.png"
import ospCS from "../images/OSP - Coming Soon.png"
import ospQC from "../images/OSP - QC.png"

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
        <img src={ospQC} alt="OSP Qira'ah Competition" />
        <div className="event-text">
          <h3>OSP Qira'ah Competition</h3>
          <p>Wednesday, January 15th</p>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdhCIESlkVtFsGMIp9xXMbWkj2foO5-4RjNht0pCd72SV9i-A/viewform" className="register-button">
            Register Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={ospCS} alt="OSP GalaComing Soon" />
        <div className="event-text">
          <h3>Orphan Sponsorship Program Gala</h3>
          <p>Sunday, January 26th</p>
          <a target="_blank" href="" className="register-button">
            Registration Available Soon
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
