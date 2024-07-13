// src/components/OSP.js
import React from "react";
import "../styles/osp.css";

// Import image
import ospPathImg from "../images/osp_path.JPG";

const OSP = () => (
  <section id="osp" className="osp-section">
    <div className="container">
      <h2 className="section-title">OSP History</h2>
      <h3>What is OSP?</h3>
      <p>
        The University of Toronto Scarborough Campus' Muslim Students'
        Association has launched the Orphan Sponsorship Program. The OSP's main
        focus is to help the deprived orphan children who are impoverished in
        the midst of political conflicts. We are the medium between those in
        need and those who wish to help for the sake of Allah by providing
        Sadaqah (Charity).
      </p>

      <h3>Who are we working with?</h3>
      <p>
        We work with Human Concern International (HCI), a well-established
        Muslim-Canadian Charitable Organization. This charity connects us with
        orphaned children whose needs are not being met due to the unstable
        conditions of their home countries. Simultaneously provide emergency aid
        to help save lives during disasters, emergencies and conflicts while
        working locally to improve the lives of vulnerable people in Canada
      </p>

      <h3>Why should we donate?</h3>
      <p>
        It is an incredibly generous deed to support an orphaned child, as
        related in the below hadith. Certainly, your donations will benefit not
        only a child in dire need but also yourself since these donations are a
        form of Sadaqah (charity).
      </p>
      <blockquote>
        <p>
          A hadith narrated by Abu Hurayrah (RA) who reported that the Prophet
          (peace be upon him) said, “If you want to soften your heart, then feed
          the poor and pat the head of the orphan.” (Musnad Ahmad )
        </p>
      </blockquote>
      <p>
        Each child we are supporting has been born into difficult circumstances
        as a result of political conflicts taking place in their country.
        Although they do the best they can to live in these conditions, they
        need more support - they need our support. You can support these orphans
        without having to individually sponsor them yourself through
        contributing to the OSP and donating what you can.
      </p>

      <h3>Who receives Donations?</h3>
      <p>
        Every child we support has been born into unfortunate, difficult
        situations through the political conflicts prevalent in their country.
        They are deprived of basic needs and have no form of support. The kids
        we sponsor range from the ages of 11 to 14. These orphans being
        sponsored live in Syria, Pakistan, Lebanon, Somalia and Afghanistan.
        Through your donations, these children can manage to get themselves an
        education instead of having to find ways to earn wages to support
        themselves at such young ages.
      </p>

      <div className="osp-history">
        <h3>OSP history since Revamp (2018):</h3>
        <img src={ospPathImg} alt="OSP Path" className="osp-path-image" />
      </div>
    </div>
  </section>
);

export default OSP;
