import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/footer.css";
import logo from "../images/Logo.jpg";
import sponsor1 from "../images/aryanmotors.png";
import sponsor2 from "../images/memon.png";
import sponsor3 from "../images/IIT_logo.png";
import sponsor4 from "../images/bboyz.png";

const Footer = () => (
  <footer id="footer">
    <div className="footer-content">
      <div className="footer-left">
        <img src={logo} alt="MSA Logo" className="footer-logo" />
        <p>© 2024 University of Toronto Scarborough MSA</p>
        <p>Address: 1265 Military Trail, Scarborough, ON</p>
        <p>Email: utscmsa1@gmail.com</p>
      </div>
      <div className="footer-center">
        <h3>Charity Week Sponsors</h3>
        <div className="sponsors">
          {/* <img src={sponsor1} alt="Sponsor 1" />
          <img src={sponsor2} alt="Sponsor 2" />
          <img src={sponsor3} alt="Sponsor 3" />
          <img src={sponsor4} alt="Sponsor 4" /> */}
          <p>Coming Soon...</p>
        </div>
      </div>
      <div className="footer-right">
        <h3>Newsletter</h3>
        <p>Join our newsletter to stay up-to-date with the MSA!</p>
        <button
          className="signup-button"
          onClick={() =>
            (window.location.href =
              "https://us5.list-manage.com/subscribe?u=a4b9ed2ce3c9b1ff2ed1cc8aa&id=9102e1b403")
          }
        >
          Sign Up
        </button>
        <div className="social-links">
          <a
            href="https://www.instagram.com/msa_utsc"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="mailto:utscmsa1@gmail.com" className="social-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://www.twitter.com/msa_utsc"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/company/msa-utsc/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.facebook.com/msautsc/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <a
          href="https://linktr.ee/utsc.msa"
          className="linktree-link"
          target="_blank"
          rel="noreferrer"
        >
          MSA Linktree
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
