import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/navbar.css";
import logo from "../images/Logo.jpg";
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
  faPhotoFilm,
  faHandsHolding
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    aboutUs: false,
    resources: false,
    programs: false,
    contact: false,
  });

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const closeNav = () => {
    setNavOpen(false);
    setDropdownOpen({
      aboutUs: false,
      resources: false,
      programs: false,
      contact: false,
    });
  };

  const closeDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: false,
    }));
  };

  const handleLinkClick = (menu) => {
    closeNav();
    closeDropdown(menu);
  };

  return (
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
      <ul className={`links ${navOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/aboutus#our-mission"
            onClick={() => handleLinkClick("aboutUs")}
          >
            <FontAwesomeIcon icon={faNetworkWired} /> About Us
          </Link>
          <div
            className={`dropdown-content ${dropdownOpen.aboutUs ? "open" : ""}`}
          >
            <Link smooth to="/aboutus#our-mission" onClick={closeNav}>
              <FontAwesomeIcon icon={faPersonPraying} /> Mission & Values
            </Link>
            <Link smooth to="/aboutus#our-constitution" onClick={closeNav}>
              <FontAwesomeIcon icon={faMosque} /> Constitution
            </Link>
            <Link smooth to="/aboutus#team" onClick={closeNav}>
              <FontAwesomeIcon icon={faHeart} /> The Team
            </Link>
          </div>
        </li>
        <li>
          <Link
            to="/resources#prayer-timings"
            onClick={() => handleLinkClick("resources")}
          >
            <FontAwesomeIcon icon={faKaaba} /> Islamic Resources
          </Link>
          <div
            className={`dropdown-content ${
              dropdownOpen.resources ? "open" : ""
            }`}
          >
            <Link smooth to="/resources#prayer-timings" onClick={closeNav}>
              <FontAwesomeIcon icon={faPersonPraying} /> Prayer timings
            </Link>
            <Link smooth to="/resources#prayer-areas" onClick={closeNav}>
              <FontAwesomeIcon icon={faMosque} /> Praying Areas
            </Link>
            <Link to="/mental-health" onClick={closeNav}>
              <FontAwesomeIcon icon={faHeart} /> Mental Health
            </Link>
            <Link to="/advocacy" onClick={closeNav}>
              <FontAwesomeIcon icon={faBullhorn} /> Advocacy
            </Link>
            <Link to="/duas" onClick={closeNav}>
              <FontAwesomeIcon icon={faHandsHolding} /> Duas
            </Link>
          </div>
        </li>
        <li>
          <Link
            to="/programs-events#announcements-page"
            onClick={() => handleLinkClick("programs")}
          >
            <FontAwesomeIcon icon={faCalendar} /> Programs & Events
          </Link>
          <div
            className={`dropdown-content ${
              dropdownOpen.programs ? "open" : ""
            }`}
          >
            <Link
              smooth
              to="/programs-events#announcements-page"
              onClick={closeNav}
            >
              <FontAwesomeIcon icon={faBullhorn} /> Announcements
            </Link>
            <Link smooth to="/programs-events#events" onClick={closeNav}>
              <FontAwesomeIcon icon={faCalendar} /> Events
            </Link>
            <Link smooth to="/programs-events#programs" onClick={closeNav}>
              <FontAwesomeIcon icon={faUsers} /> Programs
            </Link>
            <Link
              smooth
              to="/programs-events#events-calendar"
              onClick={closeNav}
            >
              <FontAwesomeIcon icon={faCalendar} /> Calendar
            </Link>
            <Link smooth to="/programs-events#osp" onClick={closeNav}>
              <FontAwesomeIcon icon={faChild} /> OSP
            </Link>
          </div>
        </li>
        <li>
          <Link
            to="/contact#get-involved"
            onClick={() => handleLinkClick("contact")}
          >
            <FontAwesomeIcon icon={faLink} /> Connect
          </Link>
          <div
            className={`dropdown-content ${dropdownOpen.contact ? "open" : ""}`}
          >
            <Link smooth to="/contact#get-involved" onClick={closeNav}>
              <FontAwesomeIcon icon={faHandshake} /> Get Involved
            </Link>
            <Link smooth to="/contact#faq-section" onClick={closeNav}>
              <FontAwesomeIcon icon={faQuestion} /> FAQ
            </Link>
          </div>
        </li>
        <li>
          <Link
            to="/gallery"
            onClick={closeNav}
          >
            <FontAwesomeIcon icon={faPhotoFilm} /> Gallery
          </Link>
        </li>
      </ul>
      <div className="icon-burger" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Header;
