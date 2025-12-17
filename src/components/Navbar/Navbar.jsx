import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar(){
    const [open , setOpen] = useState(false);
    return(
        <nav className="navbar-main-container">
          <span className="nav-logo">
             Jackony
          </span>
           <button
             className="menu-btn"
             onClick={() => setOpen(!open)}
           >
             ☰
          </button>
          <ul className={`nav-links ${open? "open": " "}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ProjectsPage">Projects</Link></li>
            <li><Link to="/BlogData">Blog</Link></li>
             <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
    )
}