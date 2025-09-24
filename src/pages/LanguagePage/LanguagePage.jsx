import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./LanguagePage.css";

const API_KEY = "15b3900d604225ec5537f0ec066870b0";
const BASE_URL = "https://api.themoviedb.org/3";

const LanguagePage = () => {
  const { lang } = useParams();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // 🔹 Fetch movies by language
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${mapLanguageCode(
            lang
          )}`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [lang]);

  // 🔹 Map language names to TMDB codes
  const mapLanguageCode = (language) => {
    const codes = {
      english: "en",
      hindi: "hi",
      telugu: "te",
      tamil: "ta",
      korean: "ko",
      spanish: "es",
    };
    return codes[language.toLowerCase()] || "en";
  };

  // 🔹 Navigate to Player.jsx
  const handlePlay = (movie) => {
    navigate(`/player/movie/${movie.id}`); // ✅ send mediaType + id
  };

  return (
    <div className="language-page">
      <Navbar />

      <div className="lang-header">
        <h2>{capitalize(lang)} Movies</h2>
      </div>

      {/* Cards */}
      <div className="cards">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="L-card"
            onClick={() => handlePlay(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default LanguagePage;
