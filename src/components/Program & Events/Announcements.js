import "../../styles/programs-events/announcements.css"

const Announcements = () => {
  const announcements = [
    {
      date: "11:59pm, Tue Apr 8th",
      title: "Annual General Meeting (Proposals Due)",
      type: "Meeting",
    },
    {
      date: "02:00pm, Wed Apr 9th",
      title: "Gratitude Jar Making",
      type: "Event",
    },
    {
      date: "04:00pm, Fri Apr 16th",
      title: "Annual General Meeting",
      type: "Meeting",
    },
    {
      date: "Until April 26th, 2025",
      title: "Final Exam Accommodations",
      type: "Important",
    },
  ]

  return (
    <section id="announcements-page">
      <div className="announcements-header">
        <h2 className="section-title">Announcements</h2>
        <p className="section-description">Stay updated with the latest news and events from MSA UTSC</p>
      </div>

      <div className="announcements-grid">
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-card">
            <div className="announcement-header">
              <span className={`announcement-type ${announcement.type.toLowerCase()}`}>{announcement.type}</span>
              <time className="announcement-date">{announcement.date}</time>
            </div>
            <h3 className="announcement-title">{announcement.title}</h3>
          </div>
        ))}
      </div>

      <div className="announcements-footer">
        {/* <button className="view-all-btn">View All Announcements</button> */}
      </div>
    </section>
  )
}

export default Announcements
