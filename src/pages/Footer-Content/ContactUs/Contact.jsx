import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success(`Thank you for contacting Netflix, ${name}! We will get back to you shortly.`);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      {/* Header */}
      <div className="contact-header">Netflix Contact Us</div>

      {/* Back Arrow */}
      <img src={back_arrow_icon} className="contact-arrow" alt="" onClick={() => navigate(-1)}/>


      <div className="contact-main">
        <h1>Get in Touch</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:support@netflix.com">support@netflix.com</a></p>
          <p>Phone: +1 (408) 540-3700</p>
          <p>Address: 100 Winchester Circle, Los Gatos, CA 95032, United States</p>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        &copy; 1997-2024 Netflix, Inc. |{" "}
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          Netflix Home
        </a>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
