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
        <div className="scroll-img"><img src={sultanSamosa} alt="Sultan Samosa"/></div>
      )},
    ],
    2024: [
      {"image": (
        <div className="scroll-img"><img src={aryanmotors} alt="Sultan Samosa"/></div>
      )},
      {"image": (
        <div className="scroll-img"><img src={bboyz} alt="Sultan Samosa"/></div>
      )},
      {"image": (
        <div className="scroll-img"><img src={memon} alt="Sultan Samosa"/></div>
      )},
      {"image": (
        <div className="scroll-img"><img src={iitLogo} alt="Sultan Samosa"/></div>
      )},
    ]
  }

  const scrollers = document.querySelectorAll('.scroller')

  // const addAnimation = () => {
  //   scrollers.forEach((scroller) => {
  //     scroller.setAttribute("data-animated", true)

  //     const scrollerInner = scroller.querySelector('.scroller__inner')
  //     const scrollerContent = Array.from(scrollerInner.children)

  //     // scrollerContent.forEach((item)=> {
  //     //   const duplicatedItem = item.cloneNode(true)
  //     //   duplicatedItem.setAttribute("aria-hidden", true)
  //     //   scrollerInner.appendChild(duplicatedItem)
  //     // })

  //   })
  // }
    
  // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //   addAnimation();
  // }





  return(
  <section className="sponsors-banner">
    <h2>Our Proud Sponsors</h2>
    <div className="container">
      <div className="sponsor-btn-container">
        <button className={`sponsor-btn ${sponsorYear == 2025 ? 'selected-btn':''}`} onClick={()=>setSponsorYear(2025)}>2025</button>
        <button className={`sponsor-btn ${sponsorYear == 2024 ? 'selected-btn':''}`} onClick={()=>setSponsorYear(2024)}>2024</button>
      </div>
      <div className="scroller">
          {/* <div className="img_list scroller__inner">  */}
             {sponsor_images[sponsorYear].map((image) => (
                <div>
                      {image["image"]}
                </div>
              ))}
          {/* </div>   */}
      </div>    
    </div>
  </section>
)};

export default SponsorsBanner;


// {sponsor_images[sponsorYear].map((image) => (
//   <li>
//         <div className="scroll-image">
//           {image["image"]}
//         </div>             
//   </li>
// ))}