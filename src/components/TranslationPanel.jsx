import React, { useState, useEffect } from "react";

export function TranslationPanel({
  text,
  translatedText,
  handleTextChange,
  charCount,
  clearText,
  handleTranslate,
  isTranslating,
  error,
  autoTranslate
}) {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'vi-VN'; // Default to Vietnamese - can be made dynamic
      
      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        
        // Update the text by combining existing text with new transcript
        const updatedText = text + ' ' + transcript;
        // Call the parent component's text change handler
        handleTextChange({ target: { value: updatedText.trim() } });
      };
      
      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognitionInstance.onend = () => {
        setIsListening(false);
      };
      
      setRecognition(recognitionInstance);
    }
    
    // Cleanup function
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const toggleListening = () => {
    if (!recognition) return;
    
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <div className="text-areas-container">
      {/* Source text area */}
      <div className="text-area-wrapper">
        <textarea
          className="source-text"
          placeholder="Nhập văn bản cần dịch"
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div className="text-controls">
          <span className="char-count">{charCount}/5000</span>
          <div className="text-buttons">
            {/* Microphone button - NEW */}
            <button
              className={`mic-button ${isListening ? 'mic-active' : ''}`}
              onClick={toggleListening}
              title={isListening ? "Dừng ghi âm" : "Nhập bằng giọng nói"}
            >
              {isListening ? '🔴 🎤' : '🎤'}
            </button>
            
            {!autoTranslate && (
              <button 
                className="translate-button" 
                onClick={handleTranslate} 
                disabled={!text.trim() || isTranslating}
>
                {isTranslating ? "Đang dịch..." : "Dịch"}
              </button>
            )}
            <button 
              className="clear-button" 
              onClick={clearText}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
      
      {/* Target text area */}
      <div className="text-area-wrapper">
        <div className="target-header">
          Bản dịch {isTranslating && <span className="translating">(đang dịch...)</span>}
        </div>
        <textarea
          className="target-text"
          value={translatedText}
          readOnly
        ></textarea>
        <div className="text-controls">
          <div className="text-buttons">
            {translatedText && (
              <button 
                className="mic-button" 
                onClick={() => navigator.clipboard.writeText(translatedText)}
                title="Sao chép bản dịch"
              >
                📋
              </button>
            )}
          </div>
        </div>
      </div>
      
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
