import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [detectLanguage, setDetectLanguage] = useState("Phát hiện ngôn ngữ");
  const [sourceLanguages, setSourceLanguages] = useState([
    "Anh",
    "Việt",
    "Pháp",
  ]);
  const [targetLanguages, setTargetLanguages] = useState([
    "Việt",
    "Anh",
    "Trung (Giản thể)",
  ]);
  const [selectedSourceLang, setSelectedSourceLang] = useState("Anh");
  const [selectedTargetLang, setSelectedTargetLang] = useState("Việt");
  const [activeTab, setActiveTab] = useState("text");
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
  };

  const handleTranslate = () => {
    setTranslatedText(`Translated: ${text}`);
  };

  const clearText = () => {
    setText("");
    setCharCount(0);
  };

  const swapLanguages = () => {
    const temp = selectedSourceLang;
    setSelectedSourceLang(selectedTargetLang);
    setSelectedTargetLang(temp);
  };

  return (
    <div className="App">
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

      <div className="translation-section">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "text" ? "active" : ""}`}
            onClick={() => setActiveTab("text")}
          >
            <i className="tab-icon">🖹</i> Văn bản
          </button>
          <button
            className={`tab ${activeTab === "image" ? "active" : ""}`}
            onClick={() => setActiveTab("image")}
          >
            <i className="tab-icon">🖼️</i> Hình ảnh
          </button>
          <button
            className={`tab ${activeTab === "document" ? "active" : ""}`}
            onClick={() => setActiveTab("document")}
          >
            <i className="tab-icon">📄</i> Tài liệu
          </button>
          <button
            className={`tab ${activeTab === "web" ? "active" : ""}`}
            onClick={() => setActiveTab("web")}
          >
            <i className="tab-icon">🌐</i> Trang web
          </button>
        </div>

        <div className="translate-container">
          <div className="language-container">
            <div className="source-lang">
              <div className="language-selector">
                <span>{detectLanguage}</span>
                <select
                  value={selectedSourceLang}
                  onChange={(e) => setSelectedSourceLang(e.target.value)}
                >
                  {sourceLanguages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button className="swap-button" onClick={swapLanguages}>
              <i className="swap-icon">⇄</i>
            </button>

            <div className="target-lang">
              <div className="language-selector">
                <select
                  value={selectedTargetLang}
                  onChange={(e) => setSelectedTargetLang(e.target.value)}
                >
                  {targetLanguages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="text-areas-container">
            <div className="text-area-wrapper">
              <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Nhập văn bản"
                className="source-text"
              />
              <div className="text-controls">
                <div className="char-count">{charCount} / 5,000</div>
                <div className="text-buttons">
                  <button className="mic-button">
                    <i className="mic-icon">🎤</i>
                  </button>
                  <button className="clear-button" onClick={clearText}>
                    <i className="clear-icon">✕</i>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-area-wrapper">
              <div className="target-header">
                <span>Bản dịch</span>
              </div>
              <textarea
                value={translatedText}
                readOnly
                className="target-text"
              />
            </div>
          </div>
        </div>

        <div className="translation-history">
          <div className="history-button">
            <i className="history-icon">🕒</i>
            <span>Các bản dịch đã thực hiện</span>
          </div>
          <div className="saved-button">
            <i className="saved-icon">⭐</i>
            <span>Đã lưu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
