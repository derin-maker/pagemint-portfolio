import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">PageMint</a>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#work" onClick={() => setIsOpen(false)}>Work</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
      <div className="navbar-right">
        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          {isDark ? "☀️" : "🌙"}
        </button>
        <button className="hamburger" id="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}