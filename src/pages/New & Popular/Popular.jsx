import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import info_icon from "../../assets/info_icon.png";
import play_icon from "../../assets/play_icon.png";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import TitleCards from "../../components/TitleCards/TitileCards";
import "./Popular.css";

const API_KEY = "15b3900d604225ec5537f0ec066870b0";
const BASE_URL = "https://api.themoviedb.org/3";

const NewAndPopular = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);
  const [featured, setFeatured] = useState(null); // Featured movie/show

  // Autoplay/pause only when banner is visible
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

  // Fetch upcoming movie for banner
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        const movie = data.results[0]; // Take the first upcoming movie
        if (!movie) return;

        // Fetch trailer
        const trailerRes = await fetch(
          `${BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
        );
        const trailerData = await trailerRes.json();
        const trailer = trailerData.results.find((v) => v.type === "Trailer");

        setFeatured({
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          release: movie.release_date,
          genre: movie.genre_ids, // Optional, can map to genre names
          rating: `⭐ ${movie.vote_average.toFixed(1)}/10`,
          youtubeKey: trailer ? trailer.key : null,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchFeatured();
  }, []);

  if (!featured) return null;

  return (
    <div className="new-popular">
      <Navbar />

      {/* 🔹 Banner Section */}
      <div className="np-banner">
        {/* If you have a local trailer fallback */}
        {featured.youtubeKey ? (
          <iframe
            title="banner-trailer"
            className="np-banner-video"
            src={`https://www.youtube.com/embed/${featured.youtubeKey}?autoplay=1&controls=0&loop=1&playlist=${featured.youtubeKey}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : null}

        <div className="np-banner-content">
          <h1>{featured.title}</h1>
          <p>{featured.description}</p>
          <div className="np-banner-buttons">
            <button
              className="play-btn"
              onClick={() =>
                featured.youtubeKey
                  ? navigate("/play", { state: { key: featured.youtubeKey } })
                  : alert("Trailer not available")
              }
            >
              <img src={play_icon} alt="" /> Play
            </button>
            <button
              className="info-btn"
              onClick={() => setShowInfo(!showInfo)}
            >
              <img src={info_icon} alt="" /> More Info
            </button>
          </div>

          {/* Info Card */}
          {showInfo && (
            <div className="info-card2">
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <p><strong>Release:</strong> {featured.release}</p>
              <p><strong>Rating:</strong> {featured.rating}</p>
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
      <div className="np-cards">
        <TitleCards title="Trending Now" category="week" mediaType="all" />
        <TitleCards title="Upcoming Movies" category="upcoming" mediaType="movie" />
        <TitleCards title="Popular TV Shows" category="popular" mediaType="tv" />
      </div>

      <Footer />
    </div>
  );
};

export default NewAndPopular;
