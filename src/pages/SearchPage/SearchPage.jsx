import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import "./SearchPage.css";
import Navbar from "../../components/Navbar/Navbar";

const SearchPage = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const API_KEY = "15b3900d604225ec5537f0ec066870b0";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results || []));
  }, [query]);

  return (
    <div className="content-search">
      <Navbar />
      <h2>Search Results for "{query}"</h2>
      <div className="results-grid">
        {results.map((item) => (
          // ❗ Use Link component to make the card clickable
          <Link
            key={item.id}
            to={`/player/${item.media_type}/${item.id}`}
            className="result-card-link" // Optional: add a class for styling
          >
            <div className="result-card">
              <div className="image-container">
                {item.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    alt={item.title || item.name}
                  />
                ) : (
                  <p>No Image Available</p>
                )}
              </div>
              <p>{item.title || item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;