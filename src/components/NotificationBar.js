import React, { useEffect, useState } from "react";
import "../styles/notification.css";

const NotificationBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const notificationClosed = sessionStorage.getItem("notificationClosed");
    if (!notificationClosed) {
      setVisible(true);
      setTimeout(() => setVisible(false), 10000);
    }
  }, []);

  const closeNotification = () => {
    setVisible(false);
    sessionStorage.setItem("notificationClosed", "true");
  };

  return (
    visible && (
      <div id="notification-bar">
        Check out the recent{" "}
        <a href="#announcements" className="notification-link">
          charity week event
        </a>{" "}
        as we raise $32,181! 🎉🎉
        <button
          id="close-notification"
          className="close-notification"
          onClick={closeNotification}
        >
          &times;
        </button>
      </div>
    )
  );
};

export default NotificationBar;
