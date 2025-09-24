import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { useMyList } from "../../hooks/useMyList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Player = () => {
  const { mediaType, id } = useParams();
  const navigate = useNavigate();
  const { addToList } = useMyList();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const [details, setDetails] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWIzOTAwZDYwNDIyNWVjNTUzN2YwZWMwNjY4NzBiMCIsIm5iZiI6MTc1NDQwODk4MC45Niwic3ViIjoiNjg5MjI4MTQwMDg2Y2RkODU1NzcyOGFiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.K7H6In0PR5Zls6Z7zeWlCOsV8-6PYPwZJW_CPJi3xEI",
    },
  };

  // 🔹 Fetch trailer video
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        const trailer = res.results?.find((vid) => vid.type === "Trailer");
        if (trailer) {
          setApiData(trailer);
        }
      })
      .catch((err) => console.error(err));
  }, [id, mediaType]);

  // 🔹 Fetch movie/tv details
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.error(err));
  }, [id, mediaType]);

  // 🔹 Handle Add to List
  const handleAddToList = () => {
    if (!details) return;

    const item = {
      id: details.id,
      title: details.title || details.name,
      poster_path: details.poster_path,
      backdrop_path: details.backdrop_path,
      media_type: mediaType, // ✅ preserve type
    };

    addToList(item);

    // ✅ Toast instead of alert
    toast.success(`${item.title} added to My List ✅`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-2)} />

      {/* ✅ ADD TO LIST */}
      <div tabIndex="0" className="plusButton" onClick={handleAddToList}>
        <svg
          className="plusIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <g mask="url(#mask0_21_345)">
            <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
          </g>
        </svg>
      </div>

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1`}
        title="trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {details && (
        <div className="player-info">
          <p>{apiData.published_at?.slice(0, 10)}</p>
          <h2>{details.title || details.name}</h2>
          <p>{apiData.type}</p>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Player;
