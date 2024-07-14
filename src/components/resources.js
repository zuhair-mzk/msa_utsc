// src/components/resources.js
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/resources.css";
import salam from "../images/salam.png"; // Adjust path as needed
import moment from "moment";

const Resources = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [hijriDate, setHijriDate] = useState("");

  useEffect(() => {
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

  return (
    <section id="resources" className="resources">
      <div className="resources-content">
        <div className="greeting-container">
          <img src={salam} alt="Salam" className="salam-image" />
          <h1 className="greeting-title">Assalamu Alaikum</h1>
          <p>
            Welcome to the website of the University of Toronto Scarborough's
            Muslim Students’ Association!
          </p>
          <p>
            At UTSC MSA, we seek to create a community that is open and dynamic,
            which caters to the best interests of all Muslims on campus.{" "}
            <HashLink to="/aboutus#about-us-section" className="mission-link">
              Read more on our mission here.
            </HashLink>
          </p>
        </div>
        <h2 id="prayer-timings" className="table-title left-aligned">
          Prayer Times
        </h2>
        <p className="table-subtitle">{hijriDate}</p>
        <table className="prayer-table">
          <thead>
            <tr className="prayer-table-row">
              <th className="prayer-table-heading">Salat</th>
              <th className="prayer-table-heading">Begins</th>
              <th className="prayer-table-heading">Iqamah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="fajr-time">Fajr</td>
              <td id="fajr-begins">{prayerTimes.fajrBegins}</td>
              <td id="fajr-iqamah">{prayerTimes.fajrIqamah}</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td id="sunrise-time" colSpan="2">
                {prayerTimes.sunrise}
              </td>
            </tr>
            <tr>
              <td id="dhuhr-time">Dhuhr</td>
              <td id="dhuhr-begins">{prayerTimes.dhuhrBegins}</td>
              <td id="dhuhr-iqamah">{prayerTimes.dhuhrIqamah}</td>
            </tr>
            <tr>
              <td id="asr-time">Asr</td>
              <td id="asr-begins">{prayerTimes.asrBegins}</td>
              <td id="asr-iqamah">{prayerTimes.asrIqamah}</td>
            </tr>
            <tr>
              <td id="maghrib-time">Maghrib</td>
              <td id="maghrib-begins">{prayerTimes.maghribBegins}</td>
              <td id="maghrib-iqamah">{prayerTimes.maghribIqamah}</td>
            </tr>
            <tr>
              <td id="isha-time">Isha</td>
              <td id="isha-begins">{prayerTimes.ishaBegins}</td>
              <td id="isha-iqamah">{prayerTimes.ishaIqamah}</td>
            </tr>
          </tbody>
        </table>
        <p className="iqamah-note">
          All iqamah prayers are held in SL 281. Timings are based on{" "}
          <a href="https://masjidomarfarooq.com/">Masjid Omar Farooq.</a>{" "}
          <HashLink to="/resources#prayer-areas" className="prayer-spaces-link">
            View all prayer spaces here.
          </HashLink>
        </p>

        <div className="jumuah-info">
          <h2 className="table-title">Jumu'ah on Campus</h2>
          <table className="prayer-table jumuah-table">
            <thead>
              <tr className="prayer-table-row">
                <th className="prayer-table-heading">Jumu'ah</th>
                <th className="prayer-table-heading">Location</th>
                <th className="prayer-table-heading">Khutbah Time</th>
                <th className="prayer-table-heading">Salah Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jumu'ah 1</td>
                <td>SL281 + SL279</td>
                <td>1:25 PM</td>
                <td>1:45 PM</td>
              </tr>
              <tr>
                <td>Jumu'ah 2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <p className="jumuah-note">
            Please note that these timings may not be completely accurate. Check
            our Instagram page for the latest updates @msa_utsc.
          </p>
          <br />
          <br />
          <button className="feedback-button">Jumu'ah Feedback</button>
        </div>
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
      </div>
    </section>
  );
};

export default Resources;
