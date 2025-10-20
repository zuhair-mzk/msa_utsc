import React from "react";
import "../../styles/duas/dua_page.css";
import { HashLink as Link } from "react-router-hash-link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PraisingAllahDuas = () => {
    return(
        <section id="dua-section">
            <h2 className="dua-title">Duas for Praising Allah</h2>
            <div className="accordion">
                <div className="btn-container">
                    <Link smooth to="/duas" style={{ textDecoration: 'none' }}>
                        <button className="back-btn">Back</button>
                    </Link>  
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Remembrance and glorification of Allah (1)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        سُبْحَانَ اللَّهِ وَبِحَمْدِهِ
                        </Typography>
                        <Typography className="p">
                        Subhaanallaahi wa bihamdihi.
                        </Typography>
                        <Typography className="p">
                        The Prophet (SAW) said: "Whoever says: "Glorified is Allah and praised is He" one hundred times a day, will have his sins forgiven even if they are like the foam of the sea".
                        </Typography>
                        <Typography className="p dua-source">
                        Al-Bukhari 7/168, Muslim 4/2071
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Remembrance and glorification of Allah (2)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        لَا إِلهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
                        </Typography>
                        <Typography className="p">
                        Laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa Huwa 'alaa kulli shay'in Qadeer.
                        </Typography>
                        <Typography className="p">
                        The Prophet (SAW) said: "Whoever says: "None has the right to be worshiped but Allah alone, Who has no partner. His is the dominion and His is the praise, and He is Able to do all things" ten times, will have the reward for freeing four slaves from the Children of Isma'il".
                        </Typography>
                        <Typography className="p dua-source">
                        Al-Bukhari 7/67, Muslim 4/2071
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Seeking forgiveness and repentance</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إلَّا هُوَ الْحَيُّ القَيُّومُ وَأَتُوبُ إِلَيهِ
                        </Typography>
                        <Typography className="p">
                        'Astaghfirullaahal-'Adheemal-lathee laa 'ilaaha 'illaa Huwal-Hayyul-Qayyoomu wa 'atoobu 'ilayhi.
                        </Typography>
                        <Typography className="p">
                        I seek the forgiveness of Allah the Mighty, Whom there is none worthy of worship except Him, the Living, the Eternal, and I repent to Him(Allah will forgive him even if he has deserted the army's ranks.)
                        </Typography>
                        <Typography className="p dua-source">
                        Abu Dawud 2/85, At-Timrizi 5/569, Al-Hakim
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>For one whos affairs have become difficult</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        اللَّهُمَّ لَا سَهْلَ إِلَاَّ مَا جَعَلتَهُ سَهْلاً وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً
                        </Typography>
                        <Typography className="p">
                        Allaahumma laa sahla 'illaa maal ja'altahu sahlan wa 'Anta taj'alul-hazna 'ithaa shi'ta sahlan.
                        </Typography>
                        <Typography className="p">
                        O Allah, there is no ease other than what You make easy. If You please You ease sorrow.
                        </Typography>
                        <Typography className="p dua-source">
                        Ibn Hibban (Hadith no. 2427), Ibn As-Sunni (Hadith no. 351)
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>For seeking guidance in forming a decision</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="p dua-arabic">
                        اللَّهُمَّ إِنِّي أَسْتَخِيـرُكَ بِعِلْمَكَ، وَأسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلاَّمُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّهَذَا الَأمْرَ (وَيُسَمِّي حَاجَتَه) خَيْرٌ
                        </Typography>
                        <Typography className="p dua-arabic">
                        لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ
                        </Typography>
                        <Typography className="p">
                        Allaahumma 'innee 'astakheeruka bi'ilmika, wa 'astaqdiruka biqudratika, wa 'as'aluka min fadhtikal-'Adheemi, fa'innaka taqdiru wa laa 'aqdiru, wa ta'lamu, wa laa 'a'lamu, wa 'Anta 'Allaamul-Ghuyoobi, Allaahumma 'in kunta ta'lamu 'anna haathal-'amra-(then mention the thing to be decided) Khayrun lee fee deenee wa ma'aashee wa 'aaqibati 'amree, faqdurhu lee wa yassirhu lee thumma baarik lee feehi, wa 'in kunta ta'lamu 'anna haathal-'amra sharrun lee fee deenee wa ma'aashee wa 'aaqibati 'amree, fasrifhu 'annee wasrifnee 'anhu waqdur liyal-khayra haythu kaana thumma 'ardhinee bihi.
                        </Typography>
                        <Typography className="p">
                        O Allah, I seek the counsel of Your Knowledge, and I seek the help of Your Omnipotence, and I beseech You for Your Magnificent Grace. Surely, You are Capable and I am not. You know and I know not, and You are the Knower of the unseen. O Allah, if You know that this matter (mention the matter) is good for me in my religion and in my life and for my welfare in the life to come in both the short term and the long term, then ordain it for me and make it easy for me, then bless me in it. And if You know that this matter is bad for me in my religion and in my life and for my welfare in the life to come in both the short term and the long term, then distance it from me, and distance me from it, and ordain for me what is good wherever it may be, and help me to be content with it.
                        </Typography>
                        <Typography className="p dua-source">
                        Al-Bukhari 7/162, Al-'Imran 3:159
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </section>
    )
}

export default PraisingAllahDuas