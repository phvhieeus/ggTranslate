// components/Header.jsx
import React from "react";
import "boxicons/css/boxicons.min.css";

export const Header = ({ onAuthToggle }) => {
  const checkAPIKeyStatus = () => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (apiKey) {
      alert(
        `API key tồn tại: Có\nKiểm tra 5 ký tự đầu: ${apiKey.substring(
          0,
          5
        )}...\nĐộ dài key: ${apiKey.length} ký tự`
      );
    } else {
      alert("API key không tồn tại. Vui lòng kiểm tra file .env của bạn.");
    }
  };

  return (
    <header className="App-header">
      <div className="header-left">
        <button className="menu-button">☰</button>
        <div className="logo">
          <span className="google-logo">Translate</span>
          <span className="translate-text">Pro</span>
        </div>
      </div>
      <div className="header-right">
        <button className="profile-button" onClick={onAuthToggle}>
          <i className="bx bxs-user-circle"></i>
        </button>
      </div>
    </header>
  );
};
