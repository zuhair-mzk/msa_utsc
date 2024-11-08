import React, { useState } from "react";
import "../styles/sponsor_section.css";

const SponsorSection = () => {
    const [sponsorYear, setSponsorYear] = useState(2024);
    const [sponsorYearButton, setSponsorYearButton] = useState(2024)

    const sponsorData = {
        2024: (
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
        ),
        2023: (
            <div className="sponsor-year" id="year-2023">
                <div className="sponsor sponsor-icon-2023">

                </div>
                <div className="sponsor sponsor-icon-2023">

                </div>
                <div className="sponsor sponsor-icon-2023">

                </div>
                <div className="sponsor sponsor-icon-2023">

                </div>

            </div>
        ),
        2022: (
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
        ),
        2021: (
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
        )    
    };

    const setYear = (year) => {
        setSponsorYear(year)
        setSponsorYearButton(year)
    }

    return(
        <section id="sponsor-section">
            <h2 className="title">Our Sponsors</h2>

            <div className="container">
                <div className="sponsor-btns">
                    <button onClick={() => setYear(2024)} className={`sponsor-year-btn ${sponsorYearButton == 2024 ? 'selected-btn': ''}`} id="btn-2024">2024</button>
                    <button onClick={() => setYear(2023)} className={`sponsor-year-btn ${sponsorYearButton == 2023 ? 'selected-btn': ''}`} id="btn-2023">2023</button>
                    <button onClick={() => setYear(2022)} className={`sponsor-year-btn ${sponsorYearButton == 2022 ? 'selected-btn': ''}`} id="btn-2022">2022</button>
                    <button onClick={() => setYear(2021)} className={`sponsor-year-btn ${sponsorYearButton == 2021 ? 'selected-btn': ''}`} id="btn-2021">2021</button>
                </div>
                <div className="sponsor-container">
                    {sponsorData[sponsorYear]}
                </div>
            </div>
        </section>

        );
};

export default SponsorSection;