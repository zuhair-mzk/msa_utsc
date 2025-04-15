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
import sponsorBanner from "./SponsorsBanner"
import SponsorsBanner from "./SponsorsBanner";

const Footer = () => (
  <footer id="footer">
    <div className="footer-content">
      <div className="footer-top">
          <SponsorsBanner />

      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <img src={logo} alt="MSA Logo" className="footer-logo" />
          <p>© 2024 University of Toronto Scarborough MSA</p>
          <p>Address: 1265 Military Trail, Scarborough, ON</p>
          <p>Email: utscmsa1@gmail.com</p>
        </div>
        <div className="footer-center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1USwiBZIF6FcWvb_Hgh1qaRMZ3jh0rI3pFvZs6CT6pt3QVQ/viewform?embedded=true" width="600" height="450" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
    </div>
  </footer>
);

export default Footer;
