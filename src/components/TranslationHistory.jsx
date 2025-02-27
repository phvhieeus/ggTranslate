import React from "react";

export const TranslationPanel = ({
  text,
  translatedText,
  handleTextChange,
  charCount,
  clearText,
  handleTranslate,
}) => {
  return (
    <>
      <div className="text-areas-container">
        <div className="text-area-wrapper">
          <textarea
            className="source-text"
            placeholder="Nhập văn bản"
            value={text}
            onChange={handleTextChange}
            onKeyUp={handleTranslate}
          ></textarea>
          <div className="text-controls">
            <div className="char-count">{charCount}/5,000</div>
            <div className="text-buttons">
              <button className="mic-button">🎤</button>
              <button className="clear-button" onClick={clearText}>
                ✕
              </button>
            </div>
          </div>
        </div>
        <div className="text-area-wrapper">
          <div className="target-header">Bản dịch</div>
          <div className="target-text">{translatedText}</div>
        </div>
      </div>

      {/* Thêm phần lịch sử và đã lưu */}
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
    </>
  );
};
