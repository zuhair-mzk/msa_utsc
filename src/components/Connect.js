import React from "react";
import "../styles/connect.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Contact = () => (
  <div>
    <section id="get-involved">
      <h1 className="get-involved-title">Get Involved</h1>
      <p className="get-involved-description">
        There are many ways to get involved with the MSA. Obviously your
        participation in our events is one and that is much appreciated, but if
        you want to work behind the scenes, consider the opportunities below:
      </p>

      <div className="get-involved-container">
        <div className="get-involved-section">
          <h2>Membership</h2>
          <p>
            The MSA general membership card grants students a variety of
            benefits which include discounts at paid entry events, a discount at
            our annual halal food fest, being entitled to vote in MSA's yearly
            elections, and of course having the opportunity to voice your
            opinions and thoughts at our bi-weekly board meetings.
          </p>
          <p>
            A membership card is valid for up to 5 years and available for
            purchase at the price of $10. We’ll bet you haven’t heard of a deal
            this sweet. If you wish to purchase a card, please fill out the form
            below and refer to it for payment details. JazakAllah!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdb2E8Mwa_wv53wjFyNH8xbXw-8PBhfWyjfetgcyiLz2yVPTg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="register-button">Register</button>
          </a>
        </div>

        <div className="get-involved-section">
          <h2>Volunteering</h2>
          <p>
            Do you wish to give back to your community and aid in virtuous
            causes? Well good news, the MSA is always looking for volunteers who
            can help out not only with setting up our various events (both
            virtual and in-person) but also individuals who wish to come out to
            our monthly excursions.
          </p>
          <p>
            Monthly excursions are group activities to serve and improve the
            community and environment such as planting trees, helping the
            homeless, volunteering at recycle management facilities, and even
            rescuing animals! Reach out to us through the contact page to join
            us!
          </p>
          <a
            href="https://docs.google.com/forms/d/1fwNxlOoIcFn0Tbi5Op8nddx7Qy6-UqxHv-F9SiqiFOQ/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="register-button">Register</button>
          </a>
        </div>

        <div className="get-involved-section">
          <h2>Executive Team</h2>
          <p>
            MSA's executive team consists of a Co-President, several
            Vice-Presidents (VPs), and several more Directors. Together, this
            team works to plan, execute, and host events and initiatives that
            add value to a student’s undergraduate experience. Our executive
            team also consists of The Message team, which works to create an MSA
            magazine by the end of each academic year.
          </p>
        </div>
      </div>
    </section>

    <section id="faq-section">
      <hr className="section-divider"></hr>
      <h2 className="faq-title">FAQ</h2>
      <div className="accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Q. How do I get involved with MSA?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A. The easiest way to get involved with MSA is to attend events,
              join programs, and become a general member. You can also volunteer
              with MSA. During the summer semester, hiring occurs for directors
              of the board.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              Q. How do I become part of the executive team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A. The executive team consists of the President and Vice
              Presidents of each team. Each year, an election takes place, as
              outlined in the Constitution, where general members of the MSA
              have the right to vote. In order to apply, you must have at least
              one prior year of experience on the MSA board. Applications open
              during March/April.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>Q. Where can I pray on campus?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A. There are two multi-faith spaces on campus: one upstairs in the
              Student Centre in SL281, and one in EV150, beside the Catalyst
              Centre. Check out the Prayer Spaces page, which includes our video
              guide on where to find SL281. If you ever need to pray on campus,
              find SL281.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography>Q. Is Jummah open to sisters?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A. Yes! We have a separate sisters section for Jummah, and sisters
              are welcome and invited to join us.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  </div>
);

export default Contact;
