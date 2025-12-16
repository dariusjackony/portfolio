import { useState } from "react";
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
             <li>Home</li>
             <li>Projects</li>
             <li>Blog</li>
             <li>Contact</li>
          </ul>
        </nav>
    )
}