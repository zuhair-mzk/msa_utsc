// src/components/resources.js
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import PrayertimesWidget from "../PrayertimesWidget";
import "../../styles/islamic-resources/resources.css";
import salam from "../../images/salam.png"; // Adjust path as needed
import moment from "moment";

const Resources = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [hijriDate, setHijriDate] = useState("");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    fetch("/prayer_times.csv")
      .then((response) => response.text())
      .then((text) => {
        const rows = text.split("\n").map((row) => row.split(","));
        const today = new Date().getDate();
        const todaysData = rows[today]; // Adjust for header row in CSV

        setPrayerTimes({
          fajrBegins: todaysData[1].replace(/"/g, ""),
          fajrIqamah: todaysData[2].replace(/"/g, ""),
          sunrise: todaysData[3].replace(/"/g, ""),
          dhuhrBegins: todaysData[4].replace(/"/g, ""),
          dhuhrIqamah: todaysData[5].replace(/"/g, ""),
          asrBegins: todaysData[6].replace(/"/g, ""),
          asrIqamah: todaysData[7].replace(/"/g, ""),
          maghribBegins: todaysData[8].replace(/"/g, ""),
          maghribIqamah: addMinutesToTime(todaysData[8].replace(/"/g, ""), 2),
          ishaBegins: todaysData[9].replace(/"/g, ""),
          ishaIqamah: todaysData[10].replace(/"/g, ""),
        });
      })
      .catch((error) => {
        console.error("Error fetching or processing the CSV file:", error);
      });

    fetchHijriDate();
  }, []);


  const addMinutesToTime = (timeStr, minutesToAdd) => {
    const timeParts = timeStr.match(/(\d+):(\d+) (AM|PM)/);
    if (!timeParts) return ""; // Return an empty string if the time format is incorrect

    const hours =
      parseInt(timeParts[1], 10) +
      (timeParts[3] === "PM" && timeParts[1] !== "12" ? 12 : 0);
    const minutes = parseInt(timeParts[2], 10);

    const date = new Date();
    date.setHours(hours, minutes + minutesToAdd, 0, 0);

    let hoursResult = date.getHours() % 12 || 12; // Convert 24h to 12h format and adjust 0 hour to 12.
    let minutesResult = date.getMinutes();
    let amPm = date.getHours() >= 12 ? "PM" : "AM";

    // Ensure double digits for minutes
    minutesResult = minutesResult < 10 ? "0" + minutesResult : minutesResult;

    return `${hoursResult}:${minutesResult} ${amPm}`;
  };

  const fetchHijriDate = () => {
    const apiUrl = `http://api.aladhan.com/v1/gToH?date=${encodeURIComponent(
      moment().format("DD-MM-YYYY")
    )}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          const hijriDate = data.data.hijri.date;
          const gregorianDate = data.data.gregorian.date;
          setHijriDate(`${gregorianDate} || ${hijriDate} AH`);
        }
      })
      .catch((error) => {
        console.error("Error fetching Hijri date:", error);
      });
  };

  const handleFeedbackClick = () => {
    alert("The Jumu'ah Feedback form is currently unavailable.");
  };

  return (
    <section id="resources" className="resources">
      <div className="resources-content">
        <div id="prayer-timings" className="greeting-container">
          <img src={salam} alt="Salam" className="salam-image" />
          <p className="prayertimesTitle">Prayer Times</p>
        </div>
        <PrayertimesWidget />

        <section id="prayer-areas">
          <h2 className="event-title">Prayer Areas</h2>
          <p className="event-description">
            Here is a video demonstrating how to get to praying areas on campus.
          </p>
          <div className="calendar-container">
            <iframe
              width="1200"
              height="600"
              src="https://www.youtube.com/embed/I32Id_tQ4mM?si=I7LtwqW0sSlG7Sav"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        <section id="dawah">
          <h2 className="event-title">Da'wah</h2>
          <p className="event-description">
            Here is a video of our Da'wah training session with MuslimHubClub.
          </p>
          <div className="calendar-container">
            <iframe
              width="1210"
              height="681"
              src="https://www.youtube.com/embed/r74JkBnqQSU"
              title="Da&#39;wah Training with MuslimHubClub!" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>

              </iframe>
          </div>
        </section>

        
      </div>
    </section>
  );
};

export default Resources;
