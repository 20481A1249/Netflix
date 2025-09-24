import React from "react";
import { useNavigate } from "react-router-dom";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./LegalNotices.css";

const Legal = () => {
  const navigate = useNavigate();

  return (
    <div className="legal-page">

      {/* Header */}
      <div className="legal-header">Netflix Legal Notices</div>

      {/* Back Arrow */}
      <img src={back_arrow_icon} className="legal-arrow" alt="" onClick={() => navigate(-1)}/>


      {/* Main Content */}
      <div className="legal-main">
        <div className="legal-title">Legal Notices</div>

        <section className="legal-section">
          <h2>Copyright Notice</h2>
          <p>
            All content on Netflix, including movies, TV shows, and images, is protected by copyright laws. Unauthorized use or distribution is prohibited.
          </p>
        </section>

        <section className="legal-section">
          <h2>Trademark Notice</h2>
          <p>
            Netflix and the Netflix logo are registered trademarks of Netflix, Inc. All other trademarks are the property of their respective owners.
          </p>
        </section>

        <section className="legal-section">
          <h2>Disclaimer</h2>
          <p>
            Netflix provides its services "as is" without warranties of any kind. We do not guarantee uninterrupted service or the accuracy of content.
          </p>
        </section>

        <section className="legal-section">
          <h2>Limitation of Liability</h2>
          <p>
            Netflix shall not be liable for any damages arising from the use or inability to use our services.
          </p>
        </section>

        <section className="legal-section">
          <h2>Governing Law</h2>
          <p>
            These legal notices are governed by the laws of the State of California, USA.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact Information</h2>
          <p>
            For legal inquiries, please contact Netflix’s legal department through the Help Centre.
          </p>
        </section>
      </div>

      {/* Footer */}
      <div className="legal-footer">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix Home
        </a>
      </div>
    </div>
  );
};

export default Legal;
