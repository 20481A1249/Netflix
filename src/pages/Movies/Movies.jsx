// src/pages/Movies/Movies.jsx
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import info_icon from "../../assets/info_icon.png";
import play_icon from "../../assets/play_icon.png";
import Footer from "../../components/Footer/Footer";
import Trailer from "../../assets/videos/Demon Slayer.mp4";
import { useNavigate } from "react-router-dom";
import TitleCards from "../../components/TitleCards/TitileCards";
import "./Movies.css";

const Movies = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  // Example featured movie
  const movie = {
    title: "Demon Slayer: Kimetsu no Yaiba – Infinity Castle",
    description:
      "Tanjiro and the Demon Slayer Corps descend into Muzan Kibutsuji’s Infinity Castle, facing deadly battles against the Upper Rank demons in a fight that will decide humanity’s fate.",
    release: "2025",
    genre: "Anime, Action, Dark Fantasy, Adventure",
    rating: "⭐ 9.0/10",
    youtubeKey: "2MKkj1DQ0NU", // example YouTube trailer ID
  };

  // Autoplay/pause only when visible
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
    <div className="movies">
      <Navbar />

      {/* 🔹 Banner */}
      <div className="movie-banner">
        <video
          ref={videoRef}
          className="movie-banner-video"
          autoPlay
          loop
          playsInline
        >
          <source src={Trailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="movie-banner-content">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <div className="movie-banner-buttons">
            <button
              className="play-btn"
              onClick={() => navigate("/play", { state: { key: movie.youtubeKey } })}
            >
              <img src={play_icon} alt="" /> Play
            </button>
            <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>

          {/* Info Card */}
          {showInfo && (
            <div className="info-card2">
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
              <button className="close-btn" onClick={() => setShowInfo(false)}>
                ✖ Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Rows using reusable TitleCards */}
      <div className="movie-cards">
        <TitleCards title="Trending This Week" category="week" mediaType="movie" />
        <TitleCards title="Popular Movies" category="popular" mediaType="movie" />
        <TitleCards title="Top Rated Movies" category="top_rated" mediaType="movie" />
      </div>

      <Footer />
    </div>
  );
};

export default Movies;
