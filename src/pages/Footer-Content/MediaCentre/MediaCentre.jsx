import React from "react";
import { useNavigate } from "react-router-dom";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./MediaCentre.css";

const MediaCentre = () => {
  const navigate = useNavigate();

  return (
    <div className="media-centre-page">
      {/* Header with Back Arrow */}
      <header className="header">
        Netflix Media Centre
      </header>

      {/* Back Arrow */}
        
        <img src={back_arrow_icon} className="media-arrow" alt="" onClick={() => navigate(-1)}/>

      <main className="main-content">
        <h1>Latest News & Press Releases</h1>

        <article className="article">
          <h2>Netflix Announces New Original Series</h2>
          <p>
            April 20, 2024 — Netflix is excited to announce a brand new original series that will premiere this summer. Stay tuned for more updates!
          </p>
        </article>

        <article className="article">
          <h2>Netflix Expands Global Reach</h2>
          <p>
            March 15, 2024 — Netflix continues to grow its subscriber base worldwide, now available in over 190 countries.
          </p>
        </article>

        <article className="article">
          <h2>Netflix Partners with Top Studios</h2>
          <p>
            February 10, 2024 — New partnerships with leading studios will bring exclusive content to Netflix subscribers.
          </p>
        </article>
      </main>

      <footer className="footer-media">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix Home
        </a>
      </footer>
    </div>
  );
};

export default MediaCentre;
