import React, { useState } from "react";
import "../../styles/duas/dua_page.css";
import { HashLink as Link } from "react-router-hash-link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PrayerDuas = () => {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <section id="dua-section">
            <h2 className="dua-title">Duas for Prayer</h2>
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
                        <Typography>Upon completing ablution (1)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        أَشْهَدُ أَنْ لَا إِلَـهَ إِلاَّ اللّهُ وَحْدَهُ لَا شَريـكَ لَـهُ وَأَشْهَدُ أَنَّ مُحَمَّـداً عَبْـدُهُ وَرَسُـولُـهُ
                        </Typography>
                        <Typography className="p">
                        'Ash-hadu 'an laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu wa 'ash-hadu 'anna Muhammadan 'abduhu wa Rasooluhu.
                        </Typography>
                        <Typography className="p">
                        I bear witness that none has the right to be worshiped but Allah alone, Who has no partner; and I bear witness that Muhammad is His slave and His Messenger.
                        </Typography>
                        <Typography className="p dua-source">
                        Muslim 1/209
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Upon completing ablution (2)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        اَللَّهُـمَّ اجْعَلْنِـي مِنَ التَّـوَّابِينَ وَاجْعَـلْنِي مِنَ الْمُتَطَهِّـرِينَ
                        </Typography>
                        <Typography className="p">
                        Allaahummaj'alnee minat-tawwaabeena waj'alnee minal-mutatahhireen.
                        </Typography>
                        <Typography className="p">
                        O Allah, make me among those who turn to You in repentance, and make me among those who are purified.
                        </Typography>
                        <Typography className="p dua-source">
                        At-Tirmizi 1/78, Al-Albani, Sahih At-Tirmizi 1/18
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Supplication at the start of the prayer</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        سُبْـحَانَكَ اللَّهُـمَّ وَبِحَمْـدِكَ، وَتَبَارَكَ اسْمُـكَ، وَتَعـَالَى جَـدُّكَ وَلَا إِلَهَ غَيْرُكَ
                        </Typography>
                        <Typography className="p">
                        Subhaanaka Allaahumma wa bihamdika, wa tabaarakasmuka, wa ta'aalaa jadduka, wa laa 'ilaaha ghayruka.                      
                        </Typography>
                        <Typography className="p">
                        Glory is to You O Allah, and praise. Blessed is Your Name and Exalted is Your Majesty. There is none worthy of worship but You.                   
                        </Typography>
                        <Typography className="p dua-source">
                        Abu Dawud, Ibn Majah, An-Nasa'i, At-Tirmizi, Al-Albani, Sahih At-Timrizi 1/77, Sahih Ibn Majah 1/135
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>While in Rukoo</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        سُبْحَانَ رَبِّيَ الْعَظِيمِ
                        </Typography>
                        <Typography className="p">
                        Subhaana Rabbiyal-'Adheem.                   
                        </Typography>
                        <Typography className="p">
                        Glory to my Lord the Exalted (Three times).                       
                        </Typography>
                        <Typography className="p dua-source">
                        Abu Dawud, Ibn Majah, An-Nasa'i, At-Tirmizi, Ahmad, Sahih At-Timrizi (Al-Albani) 1/83
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Upon rising from Rukoo</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        سَمِـعَ اللَّهُ لِمَـنْ حَمِـدَه
                        </Typography>
                        <Typography className="p">
                        Sami'allaahu liman hamidah.                        
                        </Typography>
                        <Typography className="p">
                        Allah hears whoever praises Him.                        
                        </Typography>
                        <Typography className="p dua-source">
                        Al-Bukhari, Al-Asqalani, Fathul-Bari 2/282
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>While in Sujood</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        سُبْحَانَ رَبِّيَ الأَعْلَى
                        </Typography>
                        <Typography className="p">
                        Subhaana Rabbiyal-A'laa.                        
                        </Typography>
                        <Typography className="p">
                        Glory is to my Lord, the Most High (Three times).
                        </Typography>
                        <Typography className="p dua-source">
                        Abu Dawud, Ibn Majaj, An-Nasa'i, At-Tirmizi, Ahmad, Sahih At-Tirmizi (Al-Albani) 1/83
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>The Tashahhud</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        التَّحِيَّاتُ لِلّهِ، وَالصَّلَوَاتُ، وَالطَّيِّبَاتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ للّهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لَا إِلَهَ إِلَاّ اللّهُ، وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ
                        </Typography>
                        <Typography className="p">
                        Attahiyyaatu lillaahi wassalawaatu , wattayyibaatu , assalaamu 'alayka 'ayyuhan-Nabiyyu wa rahmatullaahi wa barakaatuhu, assalaamu 'alaynaa wa 'alaa 'ibaadillaahis-saaliheen. 'Ash-hadu 'an laa 'ilaaha 'illallaahu wa 'ash-hadu 'anna Muhammadan 'abduhu wa Rasooluhu.
                        </Typography>
                        <Typography className="p">
                        All greetings of humility are for Allah, and all prayers and goodness. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous slaves of Allah. I bear witness that there is none worthy of worship but Allah, and I bear witness that Muhammad is His slave and His Messenger.
                        </Typography>
                        <Typography className="p dua-source">
                        Al-Bukhari, Muslim 1/301
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Prayers upon the Prophet saw after the Tashahhud</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحمَّد، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إبْرَاهِيمَ، إِنَّكَ حَميدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحمَّدٌ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إبْرَاهِيمَ وَعَلَى آلِ إبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ
                        </Typography>
                        <Typography className="p">
                        Allaahumma salli 'alaa Muhammadin wa 'alaa 'aali Muhammadin, kamaa sallayta 'alaa 'Ibraaheema wa 'alaa 'aali 'Ibraaheema, 'innaka Hameedun Majeed. Allaahumma baarik 'alaa Muhammadin wa 'alaa 'aali Muhammadin, kamaa baarakta 'alaa 'Ibraaheema wa 'alaa 'aali 'Ibraaheema, 'innaka Hameedun Majeed.
                        </Typography>
                        <Typography className="p">
                        O Allah, bestow Your favor on Muhammad and on the family of Muhammad as You have bestowed Your favor on Ibrahim and on the family of Ibrahim, You are Praiseworthy, Most Glorious. O Allah, bless Muhammad and the family of Muhammad as You have blessed Ibrahim and the family of Ibrahim, You are Praiseworthy, Most Glorious.
                        </Typography>
                        <Typography className="p dua-source">
                        Al-Bukhari, Fathul Bari 6/408
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </section>
    )
}

export default PrayerDuas