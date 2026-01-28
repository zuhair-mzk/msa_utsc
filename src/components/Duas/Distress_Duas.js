import React, { useState } from "react";
import "../../styles/duas/dua_page.css";
import { HashLink as Link } from "react-router-hash-link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DistressDuas = () => {
    const [expanded, setExpanded] = useState("panel1");
            
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return(
        <section id="dua-section">
            <h2 className="dua-title">Duas for when in Distress or Anxiety</h2>
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
                        <Typography>For anxiety and sorrow (1)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْـدِكَ، ابْنُ أَمَتِـكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَداً مِنْ خَلْقِـكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الغَيْبِ عِنْـدَكَ، أَنْ تَجْعَلَ القُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وجَلَاءَ حُزْنِي وذَهَابَ هَمِّي                        
                        </Typography>
                        <Typography className="p">
                        Allaahumma 'innee 'abduka, ibnu 'abdika, ibnu 'amatika, naasiyatee biyadika, maadhin fiyya hukmuka, 'adlun fiyya qadhaa'uka, 'as'aluka bikulli ismin huwa laka, sammayta bihi nafsaka, 'aw 'anzaltahu fee kitaabika, 'aw 'allamtahu 'ahadan min khalqika, 'awista'tharta bihi fee 'ilmil-ghaybi 'indaka, 'an taj'alal-Qur'aana rabee'a qalbee, wa noora sadree, wa jalaa'a huznee, wa thahaaba hammee.
                        </Typography>
                        <Typography className="p">
                        O Allah, I am Your slave and the son of Your male slave and the son of your female slave. My forehead is in Your Hand (i.e. You have control over me). Your Judgment upon me is assured and Your Decree concerning me is just. I ask You by every Name that You have named Yourself with, revealed in Your Book, taught any one of Your creation or kept unto Yourself in the knowledge of the unseen that is with You, to make the Qur'an the spring of my heart, and the light of my chest, the banisher of my sadness and the reliever of my distress.
                        </Typography>
                        <Typography className="p dua-source">
                        Ahmad 1/391
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>For anxiety and sorrow (2)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        اللَّهُمَّ إِنِّي أَعْوذُ بِكَ مِنَ الهَمِّ وَ الْحَزَنِ، وَالعَجْزِ وَالْكَسَلِ، والبُخْلِ والْجُبْنِ، وضَلَعِ الدَّيْنِ وغَلَبَةِ الرِّجَالِ
                        </Typography>
                        <Typography className="p">
                        Allaahumma 'innee 'a'oothu bika minal-hammi walhazani, wal'ajzi walkasali, walbukhli waljubni, wa dhala'id-dayni wa ghalabatir-rijaal.                       
                        </Typography>
                        <Typography className="p">
                        O Allah, I seek refuge in you from grief and sadness, from weakness and from laziness, from miserliness and from cowardice, from being overcome by debt and overpowered by men.                        
                        </Typography>
                        <Typography className="p dua-source">
                        Al-Bukhari 7/158
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>For one in distress</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        اللَّهُمَّ رَحْمَتَكَ أَرْجُوفَلَا تَكِلْنِي إِلىَ نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لَا إِلَهَ إِلَّا أَنْتَ
                        </Typography>
                        <Typography className="p">
                        Allaahumma rahmataka 'arjoo falaa takilnee 'ilaa nafsee tarfata 'aynin, wa 'aslih lee sha'nee kullahu, laa'ilaaha 'illaa 'Anta.                     
                        </Typography>
                        <Typography className="p">
                        O Allah, I hope for Your mercy. Do not leave me to myself even for the blinking of an eye. Correct all of my affairs for me. There is none worthy of worship but You.                      
                        </Typography>
                        <Typography className="p dua-source">
                        Abu Dawud 4/324, Ahmad 5/42
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </section>
    )
}

export default DistressDuas