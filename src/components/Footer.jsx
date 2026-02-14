import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

       
        <div className="footer-left">
          <img
            src="/logo.png"  
            alt="Muskurahat Foundation"
            className="footer-logo"
          />
          <h2>Muskurahat Foundation</h2>
          <p>
            Empowering lives with shelter, care, and education,
            one smile at a time.
          </p>
        </div>

  
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li>Our Story</li>
            <li>Our Initiatives</li>
            <li>Donate</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact Info</h3>
          <p>
            <FaPhoneAlt /> +91 9355254348
          </p>
          <p>
            <FaEnvelope /> muskurahatfoundation0808@gmail.com
          </p>
          <p>
            <FaInstagram /> @muskurahatfoundation0808
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Muskurahat Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
