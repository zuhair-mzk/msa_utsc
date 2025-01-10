import React from "react";
import "../styles/events.css";
import osp_why_lemons from "../images/osp_why_lemos.png"
import osp_globe from "../images/osp_globe.png"
import osp_banner from "../images/osp_banner.png"

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
        <img src={osp_banner} alt="OSP Banner" />
        <div className="event-text">
          <h3>Orphan Sponsorship Program</h3>
          <p>Stay Tuned</p>
          <a
            href="" className="register-button"
          >
            OSP
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={osp_globe} alt="Countries which OSP is currently supporting orphans" />
        <div className="event-text">
          <h3>Orphan Sponsorship Program</h3>
          <p>Stay Tuned</p>
          <a href="" className="register-button">
            OSP
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={osp_why_lemons} alt="What lemons symbolize" />
        <div className="event-text">
          <h3>Orphan Sponsorship Program</h3>
          <p>Stay Tuned</p>
          <a href="" className="register-button">
            OSP
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
