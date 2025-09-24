import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import Navbar from "../../components/Navbar/Navbar";
import "./GenrePage.css";

const GenrePage = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const API_KEY = "15b3900d604225ec5537f0ec066870b0";

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching genre movies:", error);
      }
    };

    if (genreId) {
      fetchMoviesByGenre();
    }
  }, [genreId]);

  return (
    <div className="genre-page-container">
      <Navbar />
      <h2>Children's Movies</h2>
      <div className="genre-movies-grid">
        {movies.map((movie) => (
          // ❗ Wrap the card with the Link component
          <Link key={movie.id} to={`/player/movie/${movie.id}`}>
            <div className="genre-movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;