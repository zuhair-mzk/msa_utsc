import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/navbar.css";
import logo from "../images/MSA_Logo.png";
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
  faHandsHolding,
  faHandsHelping
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal"
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [dropdownOpen, setDropdownOpen] = useState({
    aboutUs: false,
    resources: false,
    programs: false,
    contact: false,
  });

  React.useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 800);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const toggleNav = () => {
    if (!navOpen) {
      // When opening nav, close all dropdowns
      setDropdownOpen({
        aboutUs: false,
        resources: false,
        programs: false,
        contact: false,
      });
    }
    setNavOpen(!navOpen);
  };
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

  const handleDropdownToggle = (menu, e) => {
    const isMobile = window.innerWidth <= 800;
    if (isMobile) {
      e.preventDefault();
      setDropdownOpen(prev => {
        const newState = {
          aboutUs: false,
          resources: false,
          programs: false,
          contact: false,
        };
        newState[menu] = !prev[menu];
        return newState;
      });
    }
    // On desktop, let the link navigate normally
  };

  const handleDropdownItemClick = () => {
    // Close everything when clicking a dropdown item
    closeNav();
    setDropdownOpen({
      aboutUs: false,
      resources: false,
      programs: false,
      contact: false,
    });
  };

  return (
    <nav>
      <div
        className="logo-container"
        onClick={() => (window.location.href = "/")}
      >
        <img src={logo} alt="Logo" />
        <div className="logo-text">
          <span className="main-text">MSA UTSC</span>
          <span className="subtext">Muslim Students' Association</span>
        </div>
      </div>
      <ul className={`links ${navOpen ? "open" : ""}`}>
        <li className={`has-dropdown ${dropdownOpen.aboutUs ? 'dropdown-open' : ''}`}>
          {isMobile ? (
            <button
              className="dropdown-toggle"
              onClick={(e) => handleDropdownToggle("aboutUs", e)}
            >About Us</button>
          ) : (
            <Link
              to="/aboutus#our-mission"
              onClick={(e) => handleDropdownToggle("aboutUs", e)}
            >
              About Us
            </Link>
          )}

          <div
            className={`dropdown-content ${dropdownOpen.aboutUs ? "open" : ""}`}
          >
            <Link smooth to="/aboutus#our-mission" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faPersonPraying} /> Mission & Values
            </Link>
            {/* <Link smooth to="/aboutus#our-constitution" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faMosque} /> Constitution
            </Link> */}
            <Link smooth to="/aboutus#team" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faHeart} /> The Team
            </Link>
          </div>
        </li>
        <li className={`has-dropdown ${dropdownOpen.resources ? 'dropdown-open' : ''}`}>
          {isMobile ? (
            <button
              className="dropdown-toggle"
              onClick={(e) => handleDropdownToggle("resources", e)}
            >Resources</button>
          ) : (
            <Link
              to="/resources#prayer-timings"
              onClick={(e) => handleDropdownToggle("resources", e)}
            >
              Resources
            </Link>
          )}
          <div
            className={`dropdown-content ${
              dropdownOpen.resources ? "open" : ""
            }`}
          >
            <Link smooth to="/resources#prayer-timings" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faPersonPraying} /> Prayer timings
            </Link>
            <Link smooth to="/resources#prayer-areas" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faMosque} /> Praying Areas
            </Link>
            <Link 
              to="/mental-health" 
              onClick={() => {
                handleDropdownItemClick();
                // Scroll to top specifically for Mental Health page
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 100);
              }}
            >
              <FontAwesomeIcon icon={faHeart} /> Mental Health
            </Link>
            <Link to="/advocacy" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faBullhorn} /> Advocacy
            </Link>
            <Link 
              to="/duas" 
              onClick={() => {
                handleDropdownItemClick();
                // Scroll to top specifically for Duas page
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 100);
              }}
            >
              <FontAwesomeIcon icon={faHandsHolding} /> Duas
            </Link>
          </div>
        </li>
        <li className={`has-dropdown ${dropdownOpen.programs ? 'dropdown-open' : ''}`}>
          {isMobile ? (
            <button
              className="dropdown-toggle"
              onClick={(e) => handleDropdownToggle("programs", e)}
            >Programs & Events</button>
          ) : (
            <Link
              to="/programs-events#announcements-page"
              onClick={(e) => handleDropdownToggle("programs", e)}
            >
              Programs & Events
            </Link>
          )}
          <div
            className={`dropdown-content ${
              dropdownOpen.programs ? "open" : ""
            }`}
          >
            <Link
              smooth
              to="/programs-events#announcements-page"
              onClick={handleDropdownItemClick}
            >
              <FontAwesomeIcon icon={faBullhorn} /> Announcements
            </Link>
            <Link smooth to="/programs-events#events" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faCalendar} /> Events
            </Link>
            <Link smooth to="/programs-events#programs" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faUsers} /> Programs
            </Link>
            <Link
              smooth
              to="/programs-events#events-calendar"
              onClick={handleDropdownItemClick}
            >
              <FontAwesomeIcon icon={faCalendar} /> Calendar
            </Link>
            <Link smooth to="/programs-events#osp" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faChild} /> OSP
            </Link>
          </div>
        </li>
        <li className={`has-dropdown ${dropdownOpen.contact ? 'dropdown-open' : ''}`}>
          {isMobile ? (
            <button
              className="dropdown-toggle"
              onClick={(e) => handleDropdownToggle("contact", e)}
            >Connect</button>
          ) : (
            <Link
              to="/contact#get-involved"
              onClick={(e) => handleDropdownToggle("contact", e)}
            >
              Connect
            </Link>
          )}
          <div
            className={`dropdown-content ${dropdownOpen.contact ? "open" : ""}`}
          >
            <Link smooth to="/contact#get-involved" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faHandshake} /> Get Involved
            </Link>
            <Link smooth to="/contact#faq-section" onClick={handleDropdownItemClick}>
              <FontAwesomeIcon icon={faQuestion} /> FAQ
            </Link>
          </div>
        </li>
        <li>
          {isMobile ? (
            <button
              className="dropdown-toggle"
              onClick={(e) => handleDropdownToggle("gallery", e)}
            >Gallery</button>
          ) : (
            <Link
              to="/gallery"
              onClick={(e) => handleDropdownToggle("gallery", e)}
            >
              Gallery
            </Link>
          )}
        </li>
        <li>
          <Modal isMobile={isMobile} />
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
