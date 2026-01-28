import React, { useState } from "react";
import "../../styles/duas/dua_page.css";
import { HashLink as Link } from "react-router-hash-link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const KnowledgeDuas = () => {
    const [expanded, setExpanded] = useState("panel1");
        
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return(
        <section id="dua-section">
            <h2 className="dua-title">Duas for Knowledge and Studying</h2>
            <div className="accordion">
                <div className="btn-container">
                    <Link smooth to="/duas" style={{ textDecoration: 'none' }}>
                        <button className="back-btn">Back</button>
                    </Link>  
                </div>
                <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>For an increase in knowledge</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        رَبِّ زِدْنِي عِلْمًا
                        </Typography>
                        <Typography className="p">
                        Rabbi zidnee ‘ilmaa.
                        </Typography>
                        <Typography className="p">
                        My Lord, increase me in knowledge.
                        </Typography>
                        <Typography className="p dua-source">
                        Surah Taha (Chapter 20), verse:114 (excerpted)
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>For assistance in a task</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي
                        </Typography>
                        <Typography className="p">
                        Rabbishrah lee sadree Wayassir lee amree Wahlul ‘uqdatan min lisanee Yafqahoo qawlee.
                        </Typography>
                        <Typography className="p">
                        O my Sustainer! Open up my heart and make my task easy for me, and loosen the knot from my tongue so that they might fully understand my speech.
                        </Typography>
                        <Typography className="p dua-source">
                        Surah Taha (Chapter 20), verses 25-28 (excerpted)
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </section>
    )
}

export default KnowledgeDuas