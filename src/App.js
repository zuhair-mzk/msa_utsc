import React from "react";
import Header from "./components/Header";
import NotificationBar from "./components/NotificationBar";
import WelcomeSection from "./components/WelcomeSection";
import ResourcesSection from "./components/resources";
import AnnouncementsSection from "./components/AnnouncementsSection";
import EventsSection from "./components/EventsSection";
import SponsorsBanner from "./components/SponsorsBanner";
import Footer from "./components/Footer";
import "./styles/main.css";

const App = () => (
  <div className="App">
    <Header />
    <NotificationBar />
    <WelcomeSection />
    <ResourcesSection />
    <AnnouncementsSection />
    <EventsSection />
    <SponsorsBanner />
    <Footer />
  </div>
);

export default App;
