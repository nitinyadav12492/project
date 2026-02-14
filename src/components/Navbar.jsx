import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-container">

       
        <div className="nav-left">
          <img
            src="https://ngo-landing-page-rho.vercel.app/logo.jpeg"   
            alt="Muskurahat Foundation"
            className="nav-logo"
          />
          <span className="nav-title">Muskurahat Foundation</span>
        </div>

        
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/story">Our Story</NavLink></li>
          <li><NavLink to="/initiatives">Our Initiatives</NavLink></li>
          <li><NavLink to="/volunteer">Volunteer</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        
        <NavLink to="/donate" className="donate-btn">
          Donate
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
