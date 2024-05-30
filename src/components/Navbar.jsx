import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="u-header">
      <div className="u-sheet-1">
        <Link to="/" className="u-logo">
          <img src={logo} alt="MyLogo" className="u-logo-image" />
        </Link>
        <ul className="u-nav u-spacing-20 u-unstyled u-nav-1">
          <li className={`u-nav-item ${location.pathname === "/" ? "active" : ""}`}><Link to="/" className="u-nav-link">Home</Link></li>
          <li className={`u-nav-item ${location.pathname === "/about" ? "active" : ""}`}><Link to="/about" className="u-nav-link">About Me</Link></li>
          <li className={`u-nav-item ${location.pathname === "/projects" ? "active" : ""}`}><Link to="/projects" className="u-nav-link">Projects</Link></li>
          <li className={`u-nav-item ${location.pathname === "/services" ? "active" : ""}`}><Link to="/services" className="u-nav-link">Services</Link></li>
          <li className={`u-nav-item ${location.pathname === "/contact" ? "active" : ""}`}><Link to="/contact" className="u-nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;