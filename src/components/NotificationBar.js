import React, { useEffect } from "react";
import "../styles/notification.css";

const NotificationBar = () => {
  useEffect(() => {
    const notificationBar = document.getElementById("notification-bar");
    const closeNotification = () => {
      notificationBar.style.display = "none";
      sessionStorage.setItem("notificationClosed", "true");
    };

    if (sessionStorage.getItem("notificationClosed") !== "true") {
      notificationBar.style.display = "block";
      setTimeout(closeNotification, 10000);
    }

    const closeButton = document.getElementById("close-notification");
    closeButton.addEventListener("click", closeNotification);

    return () => {
      closeButton.removeEventListener("click", closeNotification);
    };
  }, []);

  return (
    <div id="notification-bar">
      Check out the recent{" "}
      <a href="#announcements" className="notification-link">
        charity week event
      </a>{" "}
      as we raise $32,181! 🎉🎉
      <button id="close-notification" className="close-notification">
        &times;
      </button>
    </div>
  );
};

export default NotificationBar;
