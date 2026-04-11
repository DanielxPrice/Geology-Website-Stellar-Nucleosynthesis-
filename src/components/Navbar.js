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

        <NavLink to="/overview" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Overview
        </NavLink>

        <NavLink to="/element-formation" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Element Formation
        </NavLink>

        <NavLink to="/stellar-stages" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Stellar Stages
        </NavLink>

        <NavLink to="/supernovae" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Supernovae
        </NavLink>

        <NavLink to="/sources" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Sources
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? "activeLink" : "")}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;