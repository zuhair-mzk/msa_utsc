import React from "react";
import "../styles/events.css";
import cw_auction from "../images/cw_auction.png"
import general_meeting from "../images/general_meeting.png"
import dawah_training from "../images/msa_dawah.png"
import lessonsSurahYusuf from "../images/24-25 COLORS AND FONTS (20).png"

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
        <img src={dawah_training} alt="MSA Dawah Training" />
        <div className="event-text">
          <h3>Dawah Training</h3>
          <p>Saturday, November 16th</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdpYf_385h2ikz1dBsfqIxoUwQOhWez6Vxl55e2FRRKHED-HA/viewform"
            className="register-button"
          >
            Register Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={general_meeting} alt="MSA General Meeting" />
        <div className="event-text">
          <h3>MSA General Meeting</h3>
          <p>Tuesday, November 19th</p>
          <a href="" className="register-button">
            Deadline: 11:59 PM
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={cw_auction} alt="Charity Week Auction Dinner" />
        <div className="event-text">
          <h3>Charity Week Auction Dinner</h3>
          <p>Sunday, October 27th</p>
          <a href="" className="register-button">
            Register Here
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
