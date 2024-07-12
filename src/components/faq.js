import React, { useState } from "react";
import "../styles/faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Q. How do I get involved with MSA?",
      answer:
        "A. The easiest way to get involved with MSA is to attend events, join programs, and become a general member. You can also volunteer with MSA. During the summer semester, hiring occurs for directors of the board.",
    },
    {
      question: "Q. How do I become part of the executive team?",
      answer:
        "A. The executive team consists of the President and Vice Presidents of each team. Each year, an election takes place, as outlined in the Constitution, where general members of the MSA have the right to vote. In order to apply, you must have at least one prior year of experience on the MSA board. Applications open during March/April.",
    },
    {
      question: "Q. Where can I pray on campus?",
      answer:
        "A. There are two multi-faith spaces on campus: one upstairs in the Student Centre in SL281, and one in EV150, beside the Catalyst Centre. Check out the Prayer Spaces page, which includes our video guide on where to find SL281. If you ever need to pray on campus, find SL281.",
    },
    {
      question: "Q. Is Jummah open to sisters?",
      answer:
        "A: Yes! We have a separate sisters section for Jummah, and sisters are welcome and invited to join us.",
    },
  ];

  return (
    <section id="faq-section">
      <h2 className="faq-title">FAQ</h2>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`accordion-button ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleAccordionClick(index)}
            >
              {item.question}
            </button>
            <div
              className="accordion-content"
              style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
