import React from "react";
import "../styles/events.css";
import cw_bonfire from "../images/cw_bonfire.png"
import cw_event_lineup from "../images/cw_event_lineup.png"
import cw_auction from "../images/cw_auction.png"
import cw_general from "../images/cw_general.png"
import cw_trivia from  "../images/cw_islamic_trivia.png"

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
        <img src={cw_bonfire} alt="Charity Week Bonfire" />
        <div className="event-text">
          <h3>Charity Week Bonfire</h3>
          <p>Monday, October 21st</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeE5wNyI9QVhDp1hIo_KKfneJ_unC-W1w1yz4TCru1A3ytUFg/viewform"
            className="register-button"
          >
            Register Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={cw_trivia} alt="Charity Week Islamic Trivia" />
        <div className="event-text">
          <h3>Islamic Trivia Night</h3>
          <p>Friday, October 25th</p>
          <a href="" className="register-button">
            Registration Available Soon
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={cw_auction} alt="Charity Week Grand Auction Dinner" />
        <div className="event-text">
          <h3>Grand Auction Dinner</h3>
          <p>Sunday, October 27th</p>
          <a href="" className="register-button">
            Registration Available Soon
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
