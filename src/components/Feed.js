import React, {useEffect, useState} from "react";
import "../styles/feed.css";
import InstagramEmbed from "./InstaEmbed";

import { HashLink as Link } from "react-router-hash-link";

const FeedSection = () => {
    const [lines, setLines] = useState([]);
    useEffect(() => {
        // Fetch the .txt file from the public folder
        fetch('/instagram.txt')
          .then((response) => response.text()) // Convert the response to text
          .then((text) => {
            // Split the text into lines by newlines
            const linesArray = text.split(',');
            setLines(linesArray); // Store the lines in state
          })
          .catch((error) => {
            console.error('Error fetching the text file:', error);
          });
      }, []);
      console.log(`${lines[0]}, ${lines[1]}, ${lines[2]}`)

    if (lines.length < 3) {
        return <p>Loading Instagram feed...</p>; // Display a loading message while data is being fetched
    }
    
    return (
        <section id="feed-section">
        <h2 className="feed-title">Instagram Feed</h2>

        <div className="feed-container">
            <div className="feed-card">
                 <InstagramEmbed url={`${lines[0]}`}/>
            </div>
            <div className="feed-card">
                <InstagramEmbed url={`${lines[1]}`}/>
            </div>
            <div className="feed-card">
                <InstagramEmbed url={`${lines[2]}`}/>
            </div>
        </div>

    </section>
    );
   
};

export default FeedSection