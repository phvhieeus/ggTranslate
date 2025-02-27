import React from "react";

export const Header = () => {
  return (
    <header className="App-header">
      <div className="header-left">
        <button className="menu-button">
          <i className="menu-icon">☰</i>
        </button>
        <div className="logo">
          <span className="google-logo">Google</span>
          <span className="translate-text">Dịch</span>
        </div>
      </div>
      <div className="header-right">
        <button className="settings-button">
          <i className="settings-icon">⚙️</i>
        </button>
        <button className="profile-button">
          <div className="profile-circle"></div>
        </button>
      </div>
    </header>
  );
};
