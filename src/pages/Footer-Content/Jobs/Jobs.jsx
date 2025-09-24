import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./Jobs.css";

const Jobs = () => {
  const navigate = useNavigate();

  // 🔹 Handle Apply Button Click
  const handleApply = (jobTitle) => {
    toast.success(`✅ Application submitted for ${jobTitle}`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="jobs-page">

      {/* Header */}
      <div className="jobs-header">Netflix Careers</div>

      {/* Back Arrow */}
      <img 
        src={back_arrow_icon} 
        className="job-arrow" 
        alt="" 
        onClick={() => navigate(-1)}
      />
      
      {/* Main Content */}
      <div className="jobs-main">
        <div className="jobs-title">Current Job Openings</div>

        <div className="job-listing">
          <div className="job-title">Software Engineer</div>
          <div className="job-location">Los Gatos, CA</div>
          <div className="job-description">
            Develop and maintain Netflix’s streaming platform, working with cutting-edge technologies to deliver the best user experience.
          </div>
          <button 
            className="apply-button"
            onClick={() => handleApply("Software Engineer")}
          >
            Apply Now
          </button>
        </div>

        <div className="job-listing">
          <div className="job-title">Content Marketing Manager</div>
          <div className="job-location">Los Angeles, CA</div>
          <div className="job-description">
            Lead marketing campaigns to promote Netflix original content and engage global audiences.
          </div>
          <button 
            className="apply-button"
            onClick={() => handleApply("Content Marketing Manager")}
          >
            Apply Now
          </button>
        </div>

        <div className="job-listing">
          <div className="job-title">Data Scientist</div>
          <div className="job-location">Remote</div>
          <div className="job-description">
            Analyze user data to improve recommendations and optimize content delivery.
          </div>
          <button 
            className="apply-button"
            onClick={() => handleApply("Data Scientist")}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="jobs-footer">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix Home
        </a>
      </div>
    </div>
  );
};

export default Jobs;
