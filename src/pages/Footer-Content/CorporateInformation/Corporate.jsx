import React from "react";
import { useNavigate } from "react-router-dom";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./Corporate.css";

const Corporate = () => {
  const navigate = useNavigate();

  return (
    <div className="corporate-page">

      {/* Header */}
      <div className="corporate-header">Netflix Corporate Information</div>

      {/* Back Arrow */}
      <img src={back_arrow_icon} className="corporate-arrow" alt="" onClick={() => navigate(-1)}/>


      <div className="corporate-main">
        <h1>Corporate Information</h1>

        <section className="corporate-section">
          <h2>Company Overview</h2>
          <p>
            Netflix, Inc. is the world's leading streaming entertainment service with over 230 million paid memberships in over 190 countries.
          </p>
        </section>

        <section className="corporate-section">
          <h2>Headquarters</h2>
          <p>
            100 Winchester Circle<br />
            Los Gatos, CA 95032<br />
            United States
          </p>
        </section>

        <section className="corporate-section">
          <h2>Leadership Team</h2>
          <ul>
            <li><strong>Reed Hastings</strong> – Co-Founder & Executive Chairman</li>
            <li><strong>Ted Sarandos</strong> – Co-CEO & Chief Content Officer</li>
            <li><strong>Greg Peters</strong> – Co-CEO & Chief Product Officer</li>
            <li><strong>Spencer Neumann</strong> – Chief Financial Officer</li>
          </ul>
        </section>

        <section className="corporate-section">
          <h2>Investor Relations</h2>
          <p>
            For financial information, quarterly reports, and investor inquiries, please visit our{" "}
            <a href="#" className="corporate-link">Investor Relations</a> page.
          </p>
        </section>

        <section className="corporate-section">
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:corporate@netflix.com" className="corporate-link">corporate@netflix.com</a></p>
          <p>Phone: +1 (408) 540-3700</p>
        </section>
      </div>

      {/* Footer */}
      <div className="corporate-footer">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer" className="corporate-link">
          Netflix Home
        </a>
      </div>
    </div>
  );
};

export default Corporate;
