import React from "react";
import { useNavigate } from "react-router-dom";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./TermsOfUse.css";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="terms-page">

      {/* Header */}
      <div className="terms-header">Netflix Terms of Use</div>
      {/* Back Arrow */}
      <img src={back_arrow_icon} className="term-arrow" alt="" onClick={() => navigate(-1)}/>


      {/* Main Content */}
      <div className="terms-main">
        <div className="terms-title">Terms of Use</div>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Netflix services, you agree to be bound by these Terms of Use and all applicable laws and regulations.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Use of Service</h2>
          <p>
            You may use Netflix services only for personal, non-commercial purposes and in accordance with these Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Content</h2>
          <p>
            All content available on Netflix is for your personal, non-commercial use only. You may not distribute, modify, or reproduce content without permission.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Termination</h2>
          <p>
            Netflix may terminate or suspend your access to the service at any time, without prior notice or liability, for any reason.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Changes to Terms</h2>
          <p>
            Netflix reserves the right to modify these Terms of Use at any time. Continued use of the service constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us through the Help Centre.
          </p>
        </section>
      </div>

      {/* Footer */}
      <div className="terms-footer">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix Home
        </a>
      </div>
    </div>
  );
};

export default Terms;
