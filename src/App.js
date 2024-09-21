// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotificationBar from "./components/NotificationBar";
import { AboutUsWithTeam } from "./components/about";
import Contact from "./components/Contact";
import ProgramsAndEvents from "./components/ProgramsAndEvents";
import Resources from "./components/resources";
import PrayerAreas from "./components/PrayerAreas";
import AnnouncementsSection from "./components/AnnouncementsSection";
import EventsSection from "./components/events";
import FeedSection from "./components/Feed"
import WelcomeSection from "./components/WelcomeSection";
import EventsCalendar from "./components/EventsCalendar";
import MentalHealth from "./components/MentalHealth";
import Advocacy from "./components/Advocacy";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div>
        <SpeedInsights />
        <Header />
        <NotificationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUsWithTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs-events" element={<ProgramsAndEvents />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/prayer-areas" element={<PrayerAreas />} />
          <Route path="/calendar" element={<EventsCalendar />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/advocacy" element={<Advocacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <WelcomeSection />
    <Resources />
    <AnnouncementsSection />
    <EventsSection />
    <FeedSection />
  </div>
);

export default App;
