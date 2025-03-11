import React from "react";

export function TranslationTabs({ activeTab, setActiveTab }) {
  return (
    <div className="translation-tabs">
      <button
        className={`tab ${activeTab === "text" ? "active" : ""}`}
        onClick={() => setActiveTab("text")}
      >
        Văn bản
      </button>
      <button
        className={`tab ${activeTab === "document" ? "active" : ""}`}
        onClick={() => setActiveTab("document")}
      >
        Tài liệu
      </button>
      <button
        className={`tab ${activeTab === "image" ? "active" : ""}`}
        onClick={() => setActiveTab("image")}
      >
        Hình ảnh
      </button>
    </div>
  );
}
