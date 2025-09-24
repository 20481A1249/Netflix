import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 import hook
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./AudioDescription.css";

const AudioDescription = () => {
  const navigate = useNavigate(); // 👈 hook to navigate

  return (
    <footer className="audio-description">
      <div className="max-container">
        {/* Back Arrow */}
        
        <img src={back_arrow_icon} className="audio-arrow" alt="" onClick={() => navigate(-1)}/>
        

        {/* Logo */}
        <div className="logo">NETFLIX</div>

        {/* Main Section */}
        <div className="main">
          {/* Left Column */}
          <div>
            <h2>Audio Description</h2>
            <p>
              Experience Netflix with Audio Description – narrated descriptions
              of key visual elements that make content accessible to blind and
              visually impaired viewers.
            </p>

            <div className="card">
              <h3>How to Enable:</h3>
              <ul>
                <li>• Start playing any title</li>
                <li>• Select the Audio & Subtitles option</li>
                <li>• Choose Audio Description from the menu</li>
                <li>• Enjoy the enhanced viewing experience</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="resources">
            <h3>Accessibility Resources</h3>
            <div className="card">
              <h4>Supported Devices</h4>
              <p>
                Smart TVs, gaming consoles, streaming media players, and mobile
                devices
              </p>
            </div>

            <div className="card">
              <h4>Available Content</h4>
              <p>
                Thousands of movies and TV shows with Audio Description available
              </p>
            </div>

            <div className="card">
              <h4>Need Help?</h4>
              <p>
                Visit our Help Center for more information on accessibility
                features
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom">
          © 2024 Netflix, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AudioDescription;
