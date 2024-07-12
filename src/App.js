import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotificationBar from "./components/NotificationBar";
import { AboutUsWithTeam } from "./components/about";
import Contact from "./components/Contact";
import EventsSection from "./components/events";
import OSP from "./components/OSP";
import Resources from "./components/resources";
import PrayerAreas from "./components/PrayerAreas";
import AnnouncementsSection from "./components/AnnouncementsSection";
import WelcomeSection from "./components/WelcomeSection";
import SponsorsBanner from "./components/SponsorsBanner";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NotificationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUsWithTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/osp" element={<OSP />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/prayer-areas" element={<PrayerAreas />} />
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
    <SponsorsBanner />
  </div>
);

export default App;
