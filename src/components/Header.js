import React from "react";
import "../styles/navbar.css";
import logo from "../images/Logo.jpg"; // Adjust path as needed

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
        <a href="/aboutus.html">
          <i className="fa-solid fa-network-wired"></i> About Us
        </a>
        <div className="dropdown-content">
          <a href="/aboutus.html#our-mission">
            <i className="fa-regular fa-file"></i> Mission & Values
          </a>
          <a href="/aboutus.html#our-constitution">
            <i className="fa-solid fa-landmark"></i> Constitution
          </a>
          <a href="/aboutus.html#team">
            <i className="fa-solid fa-face-smile"></i> The Team
          </a>
        </div>
      </li>
      <li>
        <a href="#resources">
          <i className="fa-solid fa-kaaba"></i> Islamic Resources
        </a>
        <div className="dropdown-content">
          <a href="#resources">
            <i className="fa-solid fa-person-praying"></i> Prayer timings
          </a>
          <a href="/prayer-areas.html">
            <i className="fa-solid fa-mosque"></i> Praying Areas
          </a>
          <a href="/mental_health.html">
            <i className="fa-solid fa-heart"></i> Mental Health
          </a>
          <a href="/advocacy.html">
            <i className="fa-solid fa-bullhorn"></i> Advocacy
          </a>
        </div>
      </li>
      <li>
        <a href="#">
          <i className="fa-solid fa-users"></i> Programs & Events
        </a>
        <div className="dropdown-content">
          <a href="#announcements">
            <i className="fa-solid fa-bullhorn"></i> Announcements
          </a>
          <a href="/events.html">
            <i className="fa-solid fa-calendar"></i> Events
          </a>
          <a href="#programs">
            <i className="fa-solid fa-users"></i> Programs
          </a>
          <a href="/osp.html">
            <i className="fa-solid fa-child"></i> OSP
          </a>
        </div>
      </li>
      <li>
        <a href="/contact.html">
          <i className="fa-solid fa-link"></i> Connect
        </a>
        <div className="dropdown-content">
          <a href="/contact.html#get-invovled">
            <i className="fa-solid fa-handshake"></i> Get Involved
          </a>
          <a href="/contact.html#faq-section">
            <i className="fa-solid fa-question"></i> FAQ
          </a>
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
