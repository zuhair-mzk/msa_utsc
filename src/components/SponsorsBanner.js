import React, { useEffect, useState } from "react";
import "../styles/sponsors.css";
import bboyz from "../images/bboyz.png"; // Adjust path as needed
import aryanmotors from "../images/aryanmotors.png"; // Adjust path as needed
import memon from "../images/memon.png"; // Adjust path as needed
import iitLogo from "../images/IIT_logo.png"; // Adjust path as needed
import sultanSamosa from "../images/sultan_samosa_compressed.png"

const SponsorsBanner = () => {
  const [sponsorYear, setSponsorYear] = useState(2025)

  const sponsor_images = {
    2025: [
      {"image": (
        <img alt="Sultan of Samosas" src={sultanSamosa}></img>
      )},
      {"image": (
        <img alt="Sultan of Samosas" src={sultanSamosa}></img>
      )},
      {"image": (
        <img alt="Sultan of Samosas" src={sultanSamosa}></img>
      )},
      {"image": (
        <img alt="Sultan of Samosas" src={sultanSamosa}></img>
      )},
      {"image": (
        <img alt="Sultan of Samosas" src={sultanSamosa}></img>
      )},
      {"image": (
        <img alt="Sultan of Samosas" src={sultanSamosa}></img>
      )},
      {"image": (
        <img alt="Sultan of Samosas" src={sultanSamosa}></img>
      )},
      {"image": (
        <img alt="Sultan of Samosas" src={sultanSamosa}></img>
      )},
      {"image": (
        <img alt="Sultan of Samosas" src={sultanSamosa}></img>
      )},
    ],
    2024: [
      {"image": (
        <img alt="BBOYZ" src={bboyz}></img>
      )},
      {"image": (
        <img alt="BBOYZ" src={bboyz}></img>
      )},
      {"image": (
        <img alt="BBOYZ" src={bboyz}></img>
      )},
      {"image": (
        <img alt="BBOYZ" src={bboyz}></img>
      )},
      {"image": (
        <img alt="BBOYZ" src={bboyz}></img>
      )},
    ]
  }



  return(
  <section className="sponsors-banner">
    <h2>Our Proud Sponsors</h2>
    <div className="container">
      <div className="sponsor-btn-container">
        <button className="sponsor-btn" onClick={()=>{setSponsorYear(2025)}}>2025</button>
        <button className="sponsor-btn" onClick={()=>{setSponsorYear(2024)}}>2024</button>
        </div>
        <div className="sponsor-logos-scroller">
          <ul className="sponsor-logos-inner-scoller"> 
          {sponsor_images[sponsorYear].map((image) => (
              <li>
                              <div className="scroll-image">
                                {image["image"]}
                              </div>             
              </li>
            ))}
          </ul>
        </div>    
    </div>
  </section>
)};

export default SponsorsBanner;
