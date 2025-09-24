// src/pages/MyList/MyList.jsx
import { useMyList } from "../../hooks/useMyList";
import "./MyList.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const API_KEY = "15b3900d604225ec5537f0ec066870b0";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/original";

function MyList() {
  const { myList, removeFromList } = useMyList();
  const navigate = useNavigate();

  // Fetch trailer function (same as in NewAndPopular)
  const fetchTrailer = async (id, type = "movie") => {
    try {
      const res = await fetch(
        `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      const trailer = data.results.find((vid) => vid.type === "Trailer");
      return trailer ? trailer.key : null;
    } catch (error) {
      console.error("Error fetching trailer:", error);
      return null;
    }
  };

  const handlePosterClick = async (id, type = "movie") => {
    const key = await fetchTrailer(id, type);
    if (key) {
      navigate("/play", { state: { key } });
    } else {
      alert("Trailer not available");
    }
  };

  return (
    <div className="mylist-page">
      <Navbar />
      <h2>My List</h2>

      {myList.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <div className="mylist-grid">
          {myList.map((item, index) => {
            // ✅ Debug log
            console.log("Rendering MyList item:", item);

            // ✅ Fallback: use poster_path, then backdrop_path, then placeholder
            const imageUrl = item.poster_path
              ? `${IMG_URL}${item.poster_path}`
              : item.backdrop_path
              ? `${IMG_URL}${item.backdrop_path}`
              : "/fallback-poster.png";

            return (
              <div key={`${item.id}-${index}`} className="mylist-card">
                {/* Poster → Play trailer on click */}
                <img
                  src={imageUrl}
                  alt={item.title || item.name || "Untitled"}
                  className="mylist-poster"
                  onClick={() =>
                    handlePosterClick(item.id, item.media_type || "movie")
                  }
                />

                {/* Title */}
                <h3 className="mylist-title">{item.title || item.name}</h3>

                {/* Remove button */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromList(item.id)}
                >
                  Remove ❌
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MyList;
