import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/navbar.css";
import logo from "../images/Logo.jpg"; // Adjust path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faKaaba,
  faUsers,
  faLink,
  faPersonPraying,
  faMosque,
  faHeart,
  faBullhorn,
  faCalendar,
  faChild,
  faHandshake,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <nav>
    <div
      className="logo-container"
      onClick={() => (window.location.href = "/")}
    >
      <img src={logo} alt="Logo" />
      <div className="logo-text">
        <span className="main-text">University of Toronto Scarborough</span>
        <span className="subtext">Muslim Students' Association</span>
      </div>
    </div>
    <ul className="links">
      <li>
        <Link to="/aboutus#about-us-section">
          <FontAwesomeIcon icon={faNetworkWired} /> About Us
        </Link>
        <div className="dropdown-content">
          <Link to="/aboutus#our-mission">
            <FontAwesomeIcon icon={faPersonPraying} /> Mission & Values
          </Link>
          <Link to="/aboutus#our-constitution">
            <FontAwesomeIcon icon={faMosque} /> Constitution
          </Link>
          <Link to="/aboutus#team">
            <FontAwesomeIcon icon={faHeart} /> The Team
          </Link>
        </div>
      </li>
      <li>
        <Link to="/resources#resources">
          <FontAwesomeIcon icon={faKaaba} /> Islamic Resources
        </Link>
        <div className="dropdown-content">
          <Link to="/resources#prayer-timings">
            <FontAwesomeIcon icon={faPersonPraying} /> Prayer timings
          </Link>
          <Link to="/prayer-areas#prayer-areas">
            <FontAwesomeIcon icon={faMosque} /> Praying Areas
          </Link>
          <Link to="/resources#mental-health">
            <FontAwesomeIcon icon={faHeart} /> Mental Health
          </Link>
          <Link to="/resources#advocacy">
            <FontAwesomeIcon icon={faBullhorn} /> Advocacy
          </Link>
        </div>
      </li>
      <li>
        <Link to="/events#events-section">
          <FontAwesomeIcon icon={faCalendar} /> Programs & Events
        </Link>
        <div className="dropdown-content">
          <Link to="/announcements#announcements">
            <FontAwesomeIcon icon={faBullhorn} /> Announcements
          </Link>
          <Link to="/events#events-section">
            <FontAwesomeIcon icon={faCalendar} /> Events
          </Link>
          <Link to="/programs#programs-section">
            <FontAwesomeIcon icon={faUsers} /> Programs
          </Link>
          <Link to="/osp#osp-section">
            <FontAwesomeIcon icon={faChild} /> OSP
          </Link>
        </div>
      </li>
      <li>
        <Link to="/contact#get-involved">
          <FontAwesomeIcon icon={faLink} /> Connect
        </Link>
        <div className="dropdown-content">
          <Link to="/contact#get-involved">
            <FontAwesomeIcon icon={faHandshake} /> Get Involved
          </Link>
          <Link to="/contact#faq-section">
            <FontAwesomeIcon icon={faQuestion} /> FAQ
          </Link>
        </div>
      </li>
    </ul>
    <label htmlFor="nav-toggle" className="icon-burger">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </label>
  </nav>
);

export default Header;
