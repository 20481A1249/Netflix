// src/components/TitleCards/TitleCards.jsx
import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category, mediaType = "movie" }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWIzOTAwZDYwNDIyNWVjNTUzN2YwZWMwNjY4NzBiMCIsIm5iZiI6MTc1NDQwODk4MC45Niwic3ViIjoiNjg5MjI4MTQwMDg2Y2RkODU1NzcyOGFiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.K7H6In0PR5Zls6Z7zeWlCOsV8-6PYPwZJW_CPJi3xEI",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const endpoint =
      category === "week"
        ? `trending/${mediaType}/week`
        : `${mediaType}/${category ? category : "now_playing"}`;

    fetch(`https://api.themoviedb.org/3/${endpoint}?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, [category, mediaType]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${mediaType}/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.title || card.name}
            />
            <p>{card.original_title || card.name}</p>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default TitleCards;
