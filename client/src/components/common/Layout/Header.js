import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`site-header ${isOpen ? "site-header--open" : ""}`}>
      <div className="site-header__bar">
        <div className="site-header__left">
          <button
            aria-label="Go to homepage"
            onClick={() => navigate("/professional/resume")}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img src="/portrait.jpeg" alt="Portrait" className="brand-avatar" />
          </button>

          <nav className="site-header__nav" aria-label="Primary">
            <button
              className="nav-button"
              onClick={() => {
                navigate("/professional/resume");
                setIsOpen(false);
              }}
            >
              Resume
            </button>
            <button
              className="nav-button"
              onClick={() => {
                navigate("/professional/cover-letter");
                setIsOpen(false);
              }}
            >
              Cover Letter
            </button>
            <button
              className="nav-button"
              onClick={() => {
                navigate("/professional/about-me");
                setIsOpen(false);
              }}
            >
              About Me
            </button>
          </nav>
        </div>

        <div className="site-header__right">
          <a
            href="https://linkedin.com/in/brendanhoskins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <button className="icon-button">
              <img src="/linkedin-logo.svg" alt="LinkedIn" className="icon" />
            </button>
          </a>
          <a
            href="https://github.com/BrendanHoskins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <button className="icon-button">
              <img src="/github-logo.svg" alt="GitHub" className="icon" />
            </button>
          </a>
          <button
            className="site-header__toggle"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
