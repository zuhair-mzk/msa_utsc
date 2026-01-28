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
            The MSA general membership card gives students access to exclusive benefits, 
            including discounts on paid events, voting rights in annual MSA elections, 
            and the opportunity to share your ideas and feedback at our triannual General Meetings.
          </p>
          <p>
            Membership cards are valid for up to five years and available for just $10. To purchase one, 
            please complete the form below and follow the payment instructions provided. JazakAllah!
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
            Looking to give back and contribute to meaningful causes? The MSA is 
            always seeking volunteers to support our events and take part in our 
            monthly excursions.
          </p>
          <p>
            These excursions are group initiatives focused on serving and improving 
            our community and environment, such as tree planting, supporting the unhoused, 
            and volunteering at recycling facilities. To get involved, fill out the form below 
            and join our community Discord.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeM2MKyuDkXQdjrj_12_7g-rBnnXhZK9aVDBiKBD8wAndHV9g/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="register-button">Register</button>
          </a>
        </div>

        <div className="get-involved-section">
          <h2>Executive Team</h2>
          <p>
            The MSA Board is led by a President and several Vice-Presidents (VPs),
             each overseeing a team of Directors. Together, they plan and execute
              events and initiatives that enhance the undergraduate student experience.
              The Board also includes The Message team, which produces the MSA magazine 
              published at the end of each academic year.
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
