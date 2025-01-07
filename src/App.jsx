import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    // Thêm logic dịch văn bản ở đây
    setTranslatedText(`Translated: ${text}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Dịch</h1>
      </header>
      <div className="translate-container">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập văn bản"
        />
        <button onClick={handleTranslate}>Dịch</button>
        <textarea value={translatedText} readOnly placeholder="Bản dịch" />
      </div>
    </div>
  );
}

export default App;
