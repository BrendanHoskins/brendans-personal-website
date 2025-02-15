import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
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

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "6px",
    padding: "8px 0",
    minWidth: "200px",
    zIndex: 1001,
  };

  const dropdownItemStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    display: "block",
    width: "100%",
    textAlign: "left",
    border: "none",
    backgroundColor: "transparent",
    fontSize: "14px",
    color: "#2c3e50",
    transition: "background-color 0.2s ease",
    ":hover": {
      backgroundColor: "#f8f9fa",
    },
  };

  const professionalItems = [
    { label: "Resume", path: "/professional/resume" },
    { label: "Cover Letter", path: "/professional/cover-letter" },
    { label: "Projects", path: "/"},
    { label: "More About Me", path: "/" },
    { label: "Reading", path: "/"},
    { label: "Blog", path: "/"}
  ];

  const personalItems = [
    { label: "About Me", path: "/" },
    { label: "Projects", path: "/" },
    { label: "Blog", path: "/" },
    { label: "Movies", path: "/" },
    { label: "Reading", path: "/" },
  ];

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
        <div style={{ position: "relative" }}>
          <button
            style={buttonStyle}
            onClick={() =>
              setActiveDropdown(
                activeDropdown === "professional" ? null : "professional"
              )
            }
          >
            Professional
          </button>
          {activeDropdown === "professional" && (
            <div style={dropdownStyle}>
              {professionalItems.map((item) => (
                <button
                  key={item.path}
                  style={dropdownItemStyle}
                  onClick={() => {
                    navigate(item.path);
                    setActiveDropdown(null);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <button
            style={buttonStyle}
            onClick={() =>
              setActiveDropdown(
                activeDropdown === "personal" ? null : "personal"
              )
            }
          >
            Personal
          </button>
          {activeDropdown === "personal" && (
            <div style={dropdownStyle}>
              {personalItems.map((item) => (
                <button
                  key={item.path}
                  style={dropdownItemStyle}
                  onClick={() => {
                    navigate(item.path);
                    setActiveDropdown(null);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href="https://www.linkedin.com/in/brendan-hoskins-100/"
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
