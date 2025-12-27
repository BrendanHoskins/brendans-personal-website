import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const buttonStyle = {
    padding: "12px 24px",
    margin: "0 15px",
    backgroundColor: "transparent",
    color: "#2c3e50",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#4a90e2",
      color: "white",
      transform: "translateY(-2px)",
    },
  };

  const logoStyle = {
    padding: "8px",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.1)",
    },
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "white",
    borderBottom: "1px solid #e9ecef",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/portrait.jpeg"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            marginRight: "20px",
            objectFit: "cover",
            objectPosition: "top",
          }}
          alt="Portrait"
        />
        <button
          style={buttonStyle}
          onClick={() => navigate("/professional/resume")}
        >
          Resume
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate("/professional/cover-letter")}
        >
          Cover Letter
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate("/professional/about-me")}
        >
          About Me
        </button>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href="https://linkedin.com/in/brendanhoskins"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button style={logoStyle}>
            <img
              src="/linkedin-logo.svg"
              alt="LinkedIn"
              style={{ width: "32px" }}
            />
          </button>
        </a>
        <a
          href="https://github.com/BrendanHoskins"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button style={logoStyle}>
            <img
              src="/github-logo.svg"
              alt="GitHub"
              style={{ width: "32px" }}
            />
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
