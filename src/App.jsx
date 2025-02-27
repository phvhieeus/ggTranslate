import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { TranslationTabs } from "./components/TranslationTabs";
import { LanguageControls } from "./components/LanguageControls";
import { TranslationPanel } from "./components/TranslationPanel";
import { ImageTranslation } from "./components/ImageTranslation";
import { DocumentTranslation } from "./components/DocumentTranslation";

function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedSourceLang, setSelectedSourceLang] = useState("Tiếng Anh");
  const [selectedTargetLang, setSelectedTargetLang] = useState("Tiếng Việt");
  const [activeTab, setActiveTab] = useState("text");
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
  };

  const handleTranslate = () => {
    setTranslatedText(`Đã dịch: ${text}`);
  };

  const clearText = () => {
    setText("");
    setCharCount(0);
  };

  const swapLanguages = () => {
    // Không đổi nếu nguồn là "Phát hiện ngôn ngữ"
    if (selectedSourceLang === "Phát hiện ngôn ngữ") {
      return;
    }

    const temp = selectedSourceLang;
    setSelectedSourceLang(selectedTargetLang);
    setSelectedTargetLang(temp);

    // Nếu có text và translated text, hoán đổi chúng
    if (text && translatedText) {
      setText(translatedText.replace("Đã dịch: ", ""));
      setTranslatedText(`Đã dịch: ${text}`);
      setCharCount(translatedText.replace("Đã dịch: ", "").length);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "text":
        return (
          <TranslationPanel
            text={text}
            translatedText={translatedText}
            handleTextChange={handleTextChange}
            charCount={charCount}
            clearText={clearText}
            handleTranslate={handleTranslate}
          />
        );
      case "image":
        return <ImageTranslation />;
      case "document":
        return <DocumentTranslation />;
      case "website":
        return (
          <div className="coming-soon">
            <p>Tính năng trang web sẽ sớm ra mắt</p>

            {/* Thêm phần lịch sử và đã lưu cho tab Website cũng */}
            <div className="translation-history">
              <div className="history-item">
                <div className="history-icon">
                  <span>🕒</span>
                </div>
                <div className="history-text">Các bản dịch đã thực hiện</div>
              </div>
              <div className="history-item">
                <div className="history-icon">
                  <span>⭐</span>
                </div>
                <div className="history-text">Đã lưu</div>
              </div>
            </div>

            <div className="feedback-text">Gửi ý kiến phản hồi</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="translation-section">
        <TranslationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="translate-container">
          <LanguageControls
            selectedSourceLang={selectedSourceLang}
            selectedTargetLang={selectedTargetLang}
            setSelectedSourceLang={setSelectedSourceLang}
            setSelectedTargetLang={setSelectedTargetLang}
            swapLanguages={swapLanguages}
          />
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
