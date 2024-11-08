import React, {useState} from "react";
import "../styles/sponsor_section.css";

const SponsorSection = () => {
    const [sponsorYear, setSponsorYear] = useState(2024);

    return(
        <section id="sponsor-section">
            <h2 className="title">Our Sponsors</h2>
            <div className="sponsor-container">
                <div className="sponsor-year" id="year-2024">
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                </div>
                <div className="sponsor-year" id="year-2023">
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>

                </div>
                <div className="sponsor-year" id="year-2022">
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                </div>
                <div className="sponsor-year" id="year-2021">
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>
                    <div className="sponsor">

                    </div>

                </div>

            </div>
        </section>

        );

};





export default SponsorSection;