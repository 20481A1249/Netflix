import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./Cookie.css";

const Cookies = () => {
  const navigate = useNavigate();

  const [preferences, setPreferences] = useState({
    essential: true,
    performance: true,
    functional: true,
    advertising: false,
  });

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [id]: checked }));
  };

  const handleSave = () => {
    toast.success("Your cookie preferences have been saved!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log("Saved Preferences:", preferences);
    // Here you can save preferences to localStorage, cookies, or send to server
  };

  return (
    <div className="cookies-page">
      {/* Header */}
      <div className="cookies-header">Netflix Cookie Preferences</div>

      {/* Back Arrow */}
      <img src={back_arrow_icon} className="cookie-arrow" alt="" onClick={() => navigate(-1)}/>


      <div className="cookies-main">
        <h1>Manage Your Cookie Preferences</h1>

        <section className="cookies-section">
          <p>
            We use cookies to enhance your experience, analyze site usage, and
            assist with marketing efforts. You can customize your cookie
            preferences below.
          </p>
        </section>

        <section className="cookies-section">
          <label>
            <input type="checkbox" id="essential" checked disabled />
            Essential Cookies
          </label>
          <p className="description">
            These cookies are necessary for the website to function and cannot
            be disabled.
          </p>

          <label>
            <input
              type="checkbox"
              id="performance"
              checked={preferences.performance}
              onChange={handleChange}
            />
            Performance Cookies
          </label>
          <p className="description">
            These cookies help us understand how visitors interact with our site
            to improve performance.
          </p>

          <label>
            <input
              type="checkbox"
              id="functional"
              checked={preferences.functional}
              onChange={handleChange}
            />
            Functional Cookies
          </label>
          <p className="description">
            These cookies enable enhanced functionality and personalization.
          </p>

          <label>
            <input
              type="checkbox"
              id="advertising"
              checked={preferences.advertising}
              onChange={handleChange}
            />
            Advertising Cookies
          </label>
          <p className="description">
            These cookies are used to deliver relevant advertisements and track
            ad performance.
          </p>
        </section>

        <button className="save-button" onClick={handleSave}>
          Save Preferences
        </button>
      </div>

      {/* Footer */}
      <div className="cookies-footer">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix Home
        </a>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Cookies;
