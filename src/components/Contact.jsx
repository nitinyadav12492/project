import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions? We're here to help. Reach out to us through any of
          the following channels.
        </p>
      </div>

      <div className="contact-container">
        {/* Get in Touch */}
        <div className={`contact-card ${show ? "animate" : ""}`}>
          <h2>Get in Touch</h2>

          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 9355254348</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>muskurahatfoundation0808@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className={`contact-card ${show ? "animate delay" : ""}`}>
          <h2>Office Hours</h2>

          <div className="hours">
            <div><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></div>
            <div><span>Saturday</span><span>10:00 AM - 4:00 PM</span></div>
            <div><span>Sunday</span><span>Closed</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
