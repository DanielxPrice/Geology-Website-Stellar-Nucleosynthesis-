import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Stellar Nucleosynthesis</div>

      <div className="navLinks">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          About
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Projects
        </NavLink>

        <NavLink to="/gallery" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Gallery
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;