import React, { useRef, useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
// import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitileCards'
import Footer from '../../components/Footer/Footer'
import Trialer from '../../assets/videos/Protector.mp4'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  const youtubekey = "clXiX3WvP3Q";
  const videoRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  const movie = {
    title: "The Protector",
    description:
      "A young man discovers he has special powers and is tasked with protecting Istanbul from mysterious forces.",
    release: "2018",
    genre: "Action, Fantasy, Drama",
    rating: "⭐ 7.0/10"
  }


  useEffect(() => {
    const video = videoRef.current;

    // Create intersection observer
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
      { threshold: 0.5 } // play only if 50% of video is visible
    );

    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);


  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        {/* <img src={hero_banner} alt="" className='banner-img' /> */}

        <video
          ref={videoRef}
          className="banner-img"
          autoPlay
          loop
          playsInline
        >
        <source src={Trialer} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn' onClick={()=> navigate("/play",{state: {key: youtubekey}})}><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn' onClick={()=> setShowInfo(!showInfo)}><img src={info_icon} alt="" />More Info</button>
          </div>

          {/* Info Card */}
          {showInfo && (
            <div className="info-card">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <p><strong>Release:</strong> {movie.release}</p>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Rating:</strong> {movie.rating}</p>
              <button className="close-btn" onClick={() => setShowInfo(false)}>
                ✖ Close
              </button>
            </div>
          )}

          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home