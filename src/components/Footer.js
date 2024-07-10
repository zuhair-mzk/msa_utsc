import React from "react";
import "../styles/footer.css";
import logo from "../images/Logo.jpg"; // Adjust path as needed

const Footer = () => (
  <footer id="footer">
    <div className="footer-content">
      <div className="footer-left">
        <img src={logo} alt="MSA Logo" className="footer-logo" />
        <p>© 2024 University of Toronto Scarborough MSA</p>
        <p>Address: 1265 Military Trail, Scarborough, ON</p>
        <p>Email: utscmsa1@gmail.com</p>
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
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:" className="social-icon">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://www.twitter.com/msa_utsc"
            className="social-icon"
            target="_blank"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/msa-utsc/"
            className="social-icon"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/msautsc/"
            className="social-icon"
            target="_blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <a
          href="https://linktr.ee/utsc.msa"
          className="linktree-link"
          target="_blank"
        >
          MSA Linktree
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
