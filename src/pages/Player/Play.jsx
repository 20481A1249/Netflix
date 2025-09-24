import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import back_arrow_icon from "../../assets/back_arrow_icon.png"; // ✅ import your icon
import "./Play.css";

const Play = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get YouTube key passed from TVShows.jsx
  const { key } = location.state || {};

  return (
    <div className="play-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <img src={back_arrow_icon} alt="Back" />
      </button>

      {/* Trailer */}
      {key ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${key}?autoplay=1`}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available.</p>
      )}
    </div>
  );
};

export default Play;
