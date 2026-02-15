import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


 const transparentRoutes = ["/", "/story"];
const isTransparentRoute = transparentRoutes.includes(location.pathname);

  return (
    <nav className={`navbar ${scrolled || !isTransparentRoute ? "navbar-white" : ""}`}>
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
          <li><NavLink to="/volunteers">Volunteer</NavLink></li>
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
