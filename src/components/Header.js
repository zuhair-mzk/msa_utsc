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

  const handleLinkClick = () => {
    closeNav();
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
          <Link to="/aboutus#our-mission" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faNetworkWired} /> About Us
          </Link>
          <div
            className={`dropdown-content ${dropdownOpen.aboutUs ? "open" : ""}`}
            onClick={() => toggleDropdown("aboutUs")}
          >
            <Link smooth to="/aboutus#our-mission" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faPersonPraying} /> Mission & Values
            </Link>
            <Link
              smooth
              to="/aboutus#our-constitution"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faMosque} /> Constitution
            </Link>
            <Link smooth to="/aboutus#team" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faHeart} /> The Team
            </Link>
          </div>
        </li>
        <li>
          <Link to="/resources#prayer-timings" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faKaaba} /> Islamic Resources
          </Link>
          <div
            className={`dropdown-content ${
              dropdownOpen.resources ? "open" : ""
            }`}
            onClick={() => toggleDropdown("resources")}
          >
            <Link
              smooth
              to="/resources#prayer-timings"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faPersonPraying} /> Prayer timings
            </Link>
            <Link smooth to="/resources#prayer-areas" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faMosque} /> Praying Areas
            </Link>
            <Link to="/mental-health" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faHeart} /> Mental Health
            </Link>
            <Link to="/advocacy" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faBullhorn} /> Advocacy
            </Link>
          </div>
        </li>
        <li>
          <Link
            to="/programs-events#announcements-page"
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faCalendar} /> Programs & Events
          </Link>
          <div
            className={`dropdown-content ${
              dropdownOpen.programs ? "open" : ""
            }`}
            onClick={() => toggleDropdown("programs")}
          >
            <Link
              smooth
              to="/programs-events#announcements-page"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faBullhorn} /> Announcements
            </Link>
            <Link smooth to="/programs-events#events" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faCalendar} /> Events
            </Link>
            <Link
              smooth
              to="/programs-events#programs"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faUsers} /> Programs
            </Link>
            <Link
              smooth
              to="/programs-events#events-calendar"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faCalendar} /> Calendar
            </Link>
            <Link smooth to="/programs-events#osp" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faChild} /> OSP
            </Link>
          </div>
        </li>
        <li>
          <Link to="/contact#get-involved" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faLink} /> Connect
          </Link>
          <div
            className={`dropdown-content ${dropdownOpen.contact ? "open" : ""}`}
            onClick={() => toggleDropdown("contact")}
          >
            <Link smooth to="/contact#get-involved" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faHandshake} /> Get Involved
            </Link>
            <Link smooth to="/contact#faq-section" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faQuestion} /> FAQ
            </Link>
          </div>
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
