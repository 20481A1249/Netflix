import React from "react";
import "./InvestorRelations.css";
import { useNavigate } from "react-router-dom";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"

const InvestorRelations = () => {
  const navigate = useNavigate();

  return (
    <div className="investor-relations-page">
        
      {/* Header */}
      <header className="investor-header">
        Netflix Investor Relations
      </header>
      
      {/* Back Arrow */}
        
        <img src={back_arrow_icon} className="investor-arrow" alt="" onClick={() => navigate(-1)}/>

      {/* Main Content */}
      <div className="investor-main">
        <div className="investor-title">Latest Investor Updates</div>

        <div className="investor-article">
          <div className="investor-article-title">Q1 2024 Financial Results</div>
          <div className="investor-article-content">
            April 25, 2024 — Netflix reports strong revenue growth and expanding subscriber base worldwide.
          </div>
        </div>

        <div className="investor-article">
          <div className="investor-article-title">Annual Shareholder Meeting</div>
          <div className="investor-article-content">
            March 10, 2024 — Netflix will host its annual shareholder meeting virtually. Details on participation are available online.
          </div>
        </div>

        <div className="investor-article">
          <div className="investor-article-title">Corporate Governance Updates</div>
          <div className="investor-article-content">
            February 5, 2024 — Updates to board members and committee charters have been published on the corporate site.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="investor-footer">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix Home
        </a>
      </div>
    </div>
  );
};

export default InvestorRelations;
