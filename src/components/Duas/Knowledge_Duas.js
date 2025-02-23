import React from "react";
import "../../styles/dua_page.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const KnowledgeDuas = () => {
    return(
        <section id="dua-section">
            <h2 className="dua-title">Duas for Knowledge and Studying</h2>
            <div className="accordion">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>For an increase in knowledge</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="dua-arabic">
                        رَبِّ زِدْنِي عِلْمًا
                        </Typography>
                        <Typography>
                        Rabbi zidnee ‘ilmaa
                        </Typography>
                        <Typography>
                        My Lord, increase me in knowledge
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
                        <Typography className="dua-arabic">
                        رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي
                        </Typography>
                        <Typography>
                        Rabbishrah lee sadree Wayassir lee amree Wahlul ‘uqdatan min lisanee Yafqahoo qawlee
                        </Typography>
                        <Typography>
                        O my Sustainer! Open up my heart and make my task easy for me, and loosen the knot from my tongue so that they might fully understand my speech
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </section>
    )
}

export default KnowledgeDuas