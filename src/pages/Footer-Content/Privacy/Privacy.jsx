import React from "react";
import { useNavigate } from "react-router-dom";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./Privacy.css";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="privacy-page">

      {/* Header */}
      <div className="privacy-header">Netflix Privacy Policy</div>

      {/* Back Arrow */}
      <img src={back_arrow_icon} className="privacy-arrow" alt="" onClick={() => navigate(-1)}/>


      {/* Main Content */}
      <div className="privacy-main">
        <div className="privacy-title">Privacy Policy</div>

        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as account details, payment information, and communication preferences.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to provide and improve our services, process payments, communicate with you, and personalize your experience.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share information with trusted partners to help operate our services and comply with legal obligations.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Security</h2>
          <p>
            We implement industry-standard security measures to protect your information from unauthorized access and disclosure.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Your Choices</h2>
          <p>
            You can update your account information, manage communication preferences, and opt out of certain data uses through your account settings.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Continued use of our services constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through the Help Centre.
          </p>
        </section>
      </div>

      {/* Footer */}
      <div className="privacy-footer">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix Home
        </a>
      </div>
    </div>
  );
};

export default Privacy;
