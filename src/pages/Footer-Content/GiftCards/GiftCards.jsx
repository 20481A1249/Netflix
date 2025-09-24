import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import for navigation
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./GiftCards.css";

const GiftCards = () => {
  const navigate = useNavigate(); // initialize navigation
  const [giftCode, setGiftCode] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValidating(true);

    setTimeout(() => {
      const isValid = giftCode.length === 16 && /^[A-Z0-9]+$/.test(giftCode);
      setValidationResult({
        valid: isValid,
        message: isValid
          ? "Gift card validated successfully!"
          : "Please enter a valid 16-character gift card code",
      });
      setIsValidating(false);
    }, 1500);
  };

  return (
    <div className="giftcards-page">
      {/* Header */}
      <header className="header">
        <div className="logo">NETFLIX</div>
      </header>
      {/* Back Arrow */}
        
        <img src={back_arrow_icon} className="gift-arrow" alt="" onClick={() => navigate(-1)}/>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Netflix Gift Cards</h1>
          <p>
            Give the gift of endless entertainment. Redeem your gift card code
            below to start streaming.
          </p>
        </section>

        {/* Gift Card Redemption */}
        <section className="redeem-section">
          <div className="card-gift">
            <div className="card-header">
              <h2>Redeem Your Gift Card</h2>
              <p>Enter your 16-digit gift card code to add credit to your account</p>
            </div>
            <div className="card-content">
              <form onSubmit={handleSubmit}>
                <label htmlFor="gift-code">Gift Card Code</label>
                <input
                  id="gift-code"
                  type="text"
                  value={giftCode}
                  onChange={(e) => setGiftCode(e.target.value.toUpperCase())}
                  placeholder="Enter 16-digit code"
                  maxLength={16}
                />
                <button type="submit" disabled={isValidating}>
                  {isValidating ? "Validating..." : "Redeem Gift Card"}
                </button>

                {validationResult && (
                  <div
                    className={`validation-message ${
                      validationResult.valid ? "validation-success" : "validation-error"
                    }`}
                  >
                    {validationResult.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Netflix. All rights reserved.</p>
        <p>Netflix is a fictional streaming service created for demonstration purposes.</p>
      </footer>
    </div>
  );
};

export default GiftCards;
