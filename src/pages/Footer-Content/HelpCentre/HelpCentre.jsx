import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./HelpCentre.css";

const topicsData = [
  {
    title: "Account & Billing",
    description: "Manage your account settings, payment methods, and billing information.",
  },
  {
    title: "Streaming Issues",
    description: "Troubleshoot playback problems and improve your streaming experience.",
  },
  {
    title: "Device Compatibility",
    description: "Learn about supported devices and how to set up Netflix on them.",
  },
  {
    title: "Parental Controls",
    description: "Set up and manage parental controls to restrict content.",
  },
  {
    title: "Privacy & Security",
    description: "Understand how we protect your data and privacy.",
  },
  {
    title: "Contact Support",
    description: "Get in touch with our support team for further assistance.",
  },
];

const Help = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = topicsData.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="help-page">
      {/* Header */}
      <div className="help-header">Netflix Help Centre</div>

      {/* Back Arrow */}
      {/* Back Arrow */}
        
        <img src={back_arrow_icon} className="help-back" alt="" onClick={() => navigate(-1)}/>

      <div className="help-main">
        <h1>How can we help?</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search help topics..."
            aria-label="Search help topics"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="help-topics">
          {filteredTopics.map((topic, index) => (
            <div className="topic-card" key={index} tabIndex={0}>
              <h2 className="topic-title">{topic.title}</h2>
              <p className="topic-description">{topic.description}</p>
            </div>
          ))}
          {filteredTopics.length === 0 && (
            <p className="no-results">No topics found for "{searchQuery}"</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="help-footer">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix Home
        </a>
      </div>
    </div>
  );
};

export default Help;
