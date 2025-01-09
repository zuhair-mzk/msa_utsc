// src/components/MentalHealth.js
import React, { useEffect, useState } from "react";

import "../styles/mentalhealth.css";
import canadianMuslimCounseling from "../images/canadian_muslim_counselling.png"
import naseehaMentalHealth from "../images/naseeha_mental_health.png"
import nisaHelpline from "../images/nisa_helpline.png"
import cedarwayTherapy from "../images/cedarway_therapy.png"
import muslimChaplaincy from "../images/muslim_chaplaincy.png"
import ruhCare from "../images/ruh_care_logo.png"
import khalil_centre from "../images/khalil_centre.png"
import dua1 from "../images/mh-dua1.png"

  
const MentalResource = () => (
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="mental-health-title">Mental Health</h2>

      <p className="banner-msg"> If you or anyone you know needs help, a reminder that supports are available. Did you know many therapy sessions are covered by your UofT student Greenshield Insurance? See below for details. If you have opted out of your student insurance, you may book a counselling session for free  through Muslim Chaplaincy @ UofT (McUofT) anytime, more details below. </p>

      <h3 className="emergency-contacts">Emergency Contacts</h3>
      <ul className="mental-health-contacts">
        <li>Good2Talk: <a href="tel:+18669255454">1 866-925-5454</a></li>
        <li>NISA HELPLINE: <a href="tel:+18883156472">1 888-315-6472</a></li>
        <li>NASEEHA HELPLINE: <a href="tel:+18666273342">1 866-627-3342</a></li>
      </ul>

      <h3>On Campus Resources</h3>
      <div className="resource-container">
            <div className="on-campus-resource">
              {/* <h3>On Campus</h3> */}
                <ul>
                  <li>Health and Wellness: visit <a target="_blank" href="https://studentlife.utoronto.ca/department/health-wellness/">here</a> or call <a href="tel:+14162877065">1-(416)-287-7065</a></li>
                  <li>Campus Safety: visit <a target="_blank" href="https://www.campussafety.utoronto.ca/">here</a> or call (Emegency) <a href="tel:+14169782222">1-(416)-978-2222</a></li>
                  <li>Uoft Telus Health Student Support: visit <a target="_blank" href="https://mentalhealth.utoronto.ca/telus-health-student-support/">here</a> or call <a href="tel:+18444519700">1-(844)-451-9700</a></li>
                  <li>Safety Abroad: visit <a target="_blank" href="https://learningabroad.utoronto.ca/safety-abroad/">here</a> or call <a href="tel:+12159428478">1-(215)-942-8478</a></li>
                </ul>
            </div>
            {/* <div className="external-resource">
              <h3>External</h3>
              <ul>
                  <li>Health and Wellness - (416) 287-7065</li>
                  <li>Safety Abroad - 1 (215) 942 8478</li>
                  <li>Campus Safety (Emegency) - (416) 287-7065</li>
              </ul>
            </div> */}
      </div>
    </div>
  </section>
);

const MentalHealthTips = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [language, setLang] = useState("Arabic");

  useEffect(() => {
    showSlides(slideIndex);
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  useEffect(() => {
    showSlides(slideIndex);
  }, [language]);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    let inner_slides = document.getElementsByClassName(`slide${slideIndex-1}`)
    slides[slideIndex - 1].style.display = "block";
    inner_slides[0].style.display = "block"
    // if (language == "English"){
    //   inner_slides[1].style.display = "block";
    //   inner_slides[0].style.display = "none";
    //   // slides[slideIndex - 1].style.display = "block";
    // } else {
    //   inner_slides[0].style.display = "block";
    //   inner_slides[1].style.display = "none";
      // slides[slideIndex - 1].style.display = "block";
    
    dots[slideIndex - 1].className += " active";
  }
  // const toggleLanguage = () => {
  //   console.log(`Current Language is: ${language}`)
  //   if (language == "English"){
  //     setLang("Arabic")
  //   } else {
  //     setLang("English")
  //   }
  // };

  return(
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="selfcare-title">Mental Health Duas</h2>
      
      <div className="slideshow-container-mh">
        <div className="mySlides">
            {/* <img src={dua1} className="slide0"></img> */}
            <div className="slide0">
              <p className="dua-arabic">اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْـدِكَ، ابْنُ أَمَتِـكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَداً مِنْ خَلْقِـكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الغَيْبِ عِنْـدَكَ، أَنْ تَجْعَلَ القُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وجَلَاءَ حُزْنِي وذَهَابَ هَمِّي</p>
              <p className="dua-transliteration">Allaahumma 'innee 'abduka, ibnu 'abdika, ibnu 'amatika, naasiyatee biyadika, maadhin fiyya hukmuka, 'adlun fiyya qadhaa'uka, 'as'aluka bikulli ismin huwa laka, sammayta bihi nafsaka, 'aw 'anzaltahu fee kitaabika, 'aw 'allamtahu 'ahadan min khalqika, 'awista'tharta bihi fee 'ilmil-ghaybi 'indaka, 'an taj'alal-Qur'aana rabee'a qalbee, wa noora sadree, wa jalaa'a huznee, wa thahaaba hammee</p>
              <p className="dua-translation">O Allah, I am Your slave and the son of Your male slave and the son of your female slave. My forehead is in Your Hand (i.e. You have control over me). Your Judgment upon me is assured and Your Decree concerning me is just. I ask You by every Name that You have named Yourself with, revealed in Your Book, taught any one of Your creation or kept unto Yourself in the knowledge of the unseen that is with You, to make the Qur'an the spring of my heart, and the light of my chest, the banisher of my sadness and the reliever of my distress</p>
              <p className="dua-translation">Ahmad 1/391</p>
            </div>
            {/* <div className="slide0"></div> */}
        </div>
        <div className="mySlides">
          <div className="slide1">
            <p className="dua-arabic">اللَّهُمَّ إِنِّي أَعْوذُ بِكَ مِنَ الهَمِّ وَ الْحَزَنِ، وَالعَجْزِ وَالْكَسَلِ، والبُخْلِ والْجُبْنِ، وضَلَعِ الدَّيْنِ وغَلَبَةِ الرِّجَالِ</p>
            <p className="dua-transliteration">Allaahumma 'innee 'a'oothu bika minal-hammi walhazani, wal'ajzi walkasali, walbukhli waljubni, wa dhala'id-dayni wa ghalabatir-rijaal</p>
            <p className="dua-translation">O Allah, I seek refuge in you from grief and sadness, from weakness and from laziness, from miserliness and from cowardice, from being overcome by debt and overpowered by men</p>
            <p className="dua-translation">Al-Bukhari 7/158</p>
          </div>
          {/* <div className="slide1"></div> */}
        </div>
        <div className="mySlides">
          <div className="slide2">
            <p className="dua-arabic">اللَّهُمَّ رَحْمَتَكَ أَرْجُوفَلَا تَكِلْنِي إِلىَ نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لَا إِلَهَ إِلَّا أَنْتَ</p>
            <p className="dua-transliteration">Allaahumma rahmataka 'arjoo falaa takilnee 'ilaa nafsee tarfata 'aynin, wa 'aslih lee sha'nee kullahu, laa'ilaaha 'illaa 'Anta</p>
            <p className="dua-translation">O Allah, I hope for Your mercy. Do not leave me to myself even for the blinking of an eye. Correct all of my affairs for me. There is none worthy of worship but You</p>
            <p className="dua-translation">Abu Dawud 4/324, Ahmad 5/42</p>
          </div>
          {/* <div className="slide2"></div> */}
        </div>
        
        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
      <div className="dot-container">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
      {/* <button onClick={toggleLanguage} className="language-btn">{language}</button> */}


      <h3 className="community_orgs_header">Community Organizations</h3>
      <h4>The MSA is not affiliated with any of these organizations</h4>
      <div className="chap-container">
          <div id="big-org" ><img src={muslimChaplaincy} alt="The Muslim Chaplaincy of Toronto"></img></div>
          <h4>The Muslim Chaplaincy</h4>
          <p>This organization provides counseling, classes, and programming for Muslim students. They offer free counseling
             services and have multiple chaplains <a target="_blank" href="https://mcuoft.com/">available across all 3 campuses</a>.
         </p>
      </div>
      <div className="organizations-container">
        <div>
          <div id="org" className="org1"><img src={canadianMuslimCounseling} alt="Canadian Muslim Counselling"></img></div>
          <h4>Canadian<br/> Muslim Counselling</h4>
          <p> CMC provides e-mental health services to communities across Canada. They offer therapy,
            counseling, and more, all delivered from Islamic perspectives. 
              Visit their <a target="_blank" href="https://muslimcounselling.ca/">website</a> or call (437)-886-6309.

          </p>
        </div>
        <div>
          <div id="org" className="org2"><img src={khalil_centre} alt="Khalil Centre"></img></div>
          <h4>Khalil <br/>Centre</h4>
          <p>The Khalil Center in Toronto offers counseling and therapy rooted in Islamic principles,
             addressing mental health with cultural sensitivity. Visit their <a target="_blank" href="https://khalilcenter.ca/">website</a> or call (630)-474-4414.
         </p>
        </div>
        <div>
          <div id="org"><img src={naseehaMentalHealth} alt="Naseeha Mental Health"></img></div>
          <h4>Naseeha <br/>Mental Health</h4>
          <p>Naseeha offers free, confidential mental health support for Muslims via a helpline and live chat.
             Their trained counselors provide support on a variety of issues. Call 1-866-627-3342 or visit <a target="_blank" href="https://www.naseeha.org/">naseeha.org</a>.
          </p>
        </div>
        <div>
          <div id="org"><img src={nisaHelpline} alt="Nisa Help Line"></img></div>
          <h4>Nisa Helpline</h4>
          <p>Nisa Helpline offers free, confidential support for Muslim women by trained counselors, available 7 days a week.
             Call 1-888-315-6472 to get help or visit <a target="_blank" href="https://nisahelpline.com/">nisahelpline.com</a> for more information.</p>
        </div>
        <div>
          <div id="org" className="org5"><img src={cedarwayTherapy} alt="Cedarway Therapy"></img></div>
          <h4>Cedarway Therapy</h4>
          <p>Cedarway Therapy provides mental health care for individuals, couples, and families, incorporating Islamic values into their services.
             They offer virtual and in-person counseling. Visit <a target="_blank" href="https://cedarwaytherapy.com/">cedarwaytherapy.com</a> to book a session.</p>
        </div>
        <div>
          <div id="org" className="org6"><img src={ruhCare} alt="Ruh Care"></img></div>
          <h4>Ruh Care</h4>
          <p>Ruh Care provides holistic mental health services incorporating Islamic values, offering therapy, coaching, and wellness resources.
             Sessions are available online or in-person. Learn more at <a target="_blank" href="https://www.ruhcare.com/">ruhcare.com</a></p>
        </div> 
      </div>

      <div className="Insurance-div">
        <h3 className="selfcare-title">Greenshield Coverage</h3>

        <p>Greenshield coverage for 2024-2025 will cover up to <span>$125 per visit</span>, for the first <span>20 visits</span> to any of the below services</p>
        <div className="services">
          <p>Psychologist</p>
          <p>Counsellor</p>
          <p>Master of Social Work</p>
          <p>Social Worker</p>
          <p>Psychotherapist</p>
        </div>
        <p>View the <a target="_blank" href="https://static1.squarespace.com/static/63fd00cacf68bb4c95562321/t/66d8ba71fac2ac1c3fbb399e/1725479537836/SCSU_SCU90000_90002_20240901.pdf" className="greenshield-link">2024-2025 Greenshield Plan</a> and <a target="_blank" href="https://static1.squarespace.com/static/63fd00cacf68bb4c95562321/t/66d46ecde0d39b1203532a25/1725198029296/L99-SCSU-Brochure-2024+QR.pdf" className="greenshield-link">Brochure</a> for full details</p>
      </div>
      
    </div>
  </section>
  )}


  const MentalHealth = () => (
    <div>
      <MentalResource />
      <MentalHealthTips />
    </div>
  )
    
  

export default MentalHealth;
