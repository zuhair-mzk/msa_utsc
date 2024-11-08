import React, { useState, useEffect } from "react";
import "../styles/sponsor_section.css";

const SponsorSection = () => {
    const [sponsorYear, setSponsorYear] = useState(2024);

    useEffect(() => {
        switchSponsorTab();
        const interval = setInterval(() => {
          plusIndex();
        }, 5000);
        return () => clearInterval(interval);
      }, [sponsorYear]);

    const plusIndex = () => {
        if (sponsorYear > 2021){
            setSponsorYear(c => c + 1)
            switchSponsorTab()
        } else {
            setSponsorYear(2024)
            switchSponsorTab()
        }
    }
    const switchSponsorTab = () => {
        const sponsors = document.getElementsByClassName('sponsor-year')
        for (let i=0; i < sponsors.length; i++){
            if (sponsors[i].id == `year-${sponsorYear}`){ //we are on the current tab
                sponsors[i].style.display = "block"
            } else {
                sponsors[i].style.display = "none"
            }
        }
    }

    const setYear = (year) => {
        setSponsorYear(year)
        switchSponsorTab()
    }

    return(
        <section id="sponsor-section">
            <h2 className="title">Our Sponsors</h2>

            <div className="container">
                <div className="sponsor-btns">
                    <button onClick={() => setYear(2024)} className="sponsor-year-btn">2024</button>
                    <button onClick={() => setYear(2023)} className="sponsor-year-btn">2023</button>
                    <button onClick={() => setYear(2022)} className="sponsor-year-btn">2022</button>
                    <button onClick={() => setYear(2021)} className="sponsor-year-btn">2021</button>
                </div>
                <div className="sponsor-container">
                    <div className="sponsor-year" id="year-2024">
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                    </div>
                    <div className="sponsor-year" id="year-2023">
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>
                        <div className="sponsor sponsor-icon-2024">

                        </div>

                    </div>
                    <div className="sponsor-year" id="year-2022">
                        <div className="sponsor sponsor-icon-2022">

                        </div>
                        <div className="sponsor sponsor-icon-2022">

                        </div>
                        <div className="sponsor sponsor-icon-2022">

                        </div>
                        <div className="sponsor sponsor-icon-2022">

                        </div>
                    </div>
                    <div className="sponsor-year" id="year-2021">
                        <div className="sponsor sponsor-icon-2021">

                        </div>
                        <div className="sponsor sponsor-icon-2021">

                        </div>
                        <div className="sponsor sponsor-icon-2021">

                        </div>
                        <div className="sponsor sponsor-icon-2021">

                        </div>

                    </div>

                </div>
            </div>
        </section>

        );

};





export default SponsorSection;