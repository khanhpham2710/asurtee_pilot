import React, { useState, useEffect } from 'react';
import { createWorker } from 'tesseract.js';
import "./ScanTest.css"

const ScanTest = () => {
  const [extractedText, setExtractedText] = useState('');
  const [file, setFile] = useState(null);
  const [loadingText, setLoadingText] = useState(false);

  useEffect(() => {
    const url = localStorage.getItem("url");
    setFile(url);
  }, []);

  useEffect(() => {
    const handleUpload = async () => {
      if (!file) return;
      setLoadingText('Processing image...');
      try {
        const text = await performOCR(file);
        setExtractedText(text);
      } catch (error) {
        console.error("OCR Error:", error);
        setExtractedText('Error processing image.');
      } finally {
        setLoadingText('');
      }
    };

    handleUpload();
  }, [file]);

  const performOCR = async (image) => {
    const worker = await createWorker('vie', 1, {
      logger: m => {
        if (m.status === 'recognizing text') {
          setLoadingText(`Processing... ${Math.round(m.progress * 100)}%`);
        }
      },
    });
    const { data: { text } } = await worker.recognize(image);
    await worker.terminate();

    return text;
  };

  return (
    <div className="container">
      {file && (
        <div>
          <img src={file} alt="" style={{ width: "300px" }} />
        </div>
      )}
      <div id="textOutput" style={{ whiteSpace: 'pre-wrap' }}>
        {loadingText || extractedText}
      </div>
    </div>
  );
};

export default ScanTest;
