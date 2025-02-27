import React, { useState } from "react";

export const LanguageControls = ({
  swapLanguages,
  selectedSourceLang,
  selectedTargetLang,
  setSelectedSourceLang,
  setSelectedTargetLang,
}) => {
  const [showSourceOptions, setShowSourceOptions] = useState(false);
  const [showTargetOptions, setShowTargetOptions] = useState(false);

  // Danh sách 4 ngôn ngữ cố định
  const languages = ["Tiếng Anh", "Tiếng Việt", "Tiếng Trung"];

  return (
    <div className="language-container">
      <div className="language-section">
        <div
          className="selected-language"
          onClick={() => setShowSourceOptions(!showSourceOptions)}
        >
          {selectedSourceLang}
          <span className="dropdown-arrow">▼</span>
        </div>

        {showSourceOptions && (
          <div className="language-options">
            <div className="language-options-grid">
              {languages.map((lang) => (
                <div
                  key={lang}
                  className={`language-option ${
                    selectedSourceLang === lang ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedSourceLang(lang);
                    setShowSourceOptions(false);
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button className="swap-button" onClick={swapLanguages}>
        <i className="swap-icon">⇄</i>
      </button>

      <div className="language-section">
        <div
          className="selected-language"
          onClick={() => setShowTargetOptions(!showTargetOptions)}
        >
          {selectedTargetLang}
          <span className="dropdown-arrow">▼</span>
        </div>

        {showTargetOptions && (
          <div className="language-options">
            <div className="language-options-grid">
              {languages.map((lang) => (
                <div
                  key={lang}
                  className={`language-option ${
                    selectedTargetLang === lang ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedTargetLang(lang);
                    setShowTargetOptions(false);
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
