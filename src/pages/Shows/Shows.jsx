// src/pages/TVShows/TVShows.jsx
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import info_icon from "../../assets/info_icon.png";
import play_icon from "../../assets/play_icon.png";
import Footer from "../../components/Footer/Footer";
import Trialer from "../../assets/videos/Wednesday.mp4";
import { useNavigate } from "react-router-dom";
import TitleCards from "../../components/TitleCards/TitileCards";
import "./Shows.css";

const TVShows = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  // Hardcoded video info (like Home.jsx)
  const movie = {
    title: "Wednesday",
    description:
      "Smart, sarcastic, and a little dead inside, Wednesday Addams investigates twisted mysteries while making new friends — and foes — at Nevermore Academy.",
    release: "2022",
    genre: "Black comedy, Coming-of-age, Horror, Mystery, Supernatural",
    rating: "⭐ 8.0/10 (IMDb)",
    youtubeKey: "Di310WS8zLk", // Example YouTube trailer
  };

  // Auto play/pause video when in viewport
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) => console.log("Autoplay blocked:", err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="tvshows">
      <Navbar />

      {/* 🔹 Banner */}
      <div className="tv-banner">
        <video
          ref={videoRef}
          className="tv-banner-img"
          autoPlay
          loop
          playsInline
        >
          <source src={Trialer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="tv-banner-content">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <div className="tv-banner-buttons">
            <button
              className="play-btn"
              onClick={() =>
                navigate("/play", { state: { key: movie.youtubeKey } })
              }
            >
              <img src={play_icon} alt="" /> Play
            </button>
            <button
              className="info-btn"
              onClick={() => setShowInfo(!showInfo)}
            >
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>

          {/* Info Card */}
          {showInfo && (
            <div className="info-card1">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <p>
                <strong>Release:</strong> {movie.release}
              </p>
              <p>
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p>
                <strong>Rating:</strong> {movie.rating}
              </p>
              <button
                className="close-btn"
                onClick={() => setShowInfo(false)}
              >
                ✖ Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Rows using reusable TitleCards */}
      <div className="tv-cards">
        <TitleCards title="Trending This Week" category="week" mediaType="tv" />
        <TitleCards title="Popular Shows" category="popular" mediaType="tv" />
        <TitleCards title="Top Rated Shows" category="top_rated" mediaType="tv" />
      </div>

      <Footer />
    </div>
  );
};

export default TVShows;
