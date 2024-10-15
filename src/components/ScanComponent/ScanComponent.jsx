import React, { useState, useEffect } from 'react';
import { createWorker } from 'tesseract.js';
import { useParams } from 'react-router-dom';

const ScanComponent = ({ setInfos }) => {
  const [file, setFile] = useState(null);
  const { number } = useParams()
  const [text, setText] = useState(null)

  useEffect(() => {
    const url = sessionStorage.getItem("url");
    if (url) {
      setFile(url);
    }
  }, []);

  const extractBusinessInfo = (text) => {
    const registrationNumberRegex = /등록번호\s*:\s*([\d-]+)/;
    const businessNameRegex = /법인명\(단체명\)\s*:\s*(.*)/;
    const addressRegex = /사업장 소재지\s*:\s*([\s\S]*?)(?:본 점 소 재 지|$)/;

    const registrationNumberMatch = text.match(registrationNumberRegex);
    const businessNameMatch = text.match(businessNameRegex);
    const addressMatch = text.match(addressRegex);

    const result = {
      계약자: null || "not_yet",
      등록번호: registrationNumberMatch ? registrationNumberMatch[1] : number ? number : "failed",
      "상호(법인)명": businessNameMatch ? businessNameMatch[1] : "failed",
      주소: addressMatch ? addressMatch[1].trim() : "failed",
      extra: null || "not_yet"
    };

    setInfos(result);
    setText({
      hang1: registrationNumberMatch,
      hang2: businessNameMatch,
      hang3: addressMatch
    });
  };


  useEffect(() => {
    const handleOcr = async () => {
      if (!file) return;
      try {
        const text = await performOCR(file);
        extractBusinessInfo(text);
      } catch (error) {
        console.error("OCR Error:", error);
      }
    };

    handleOcr();
  }, [file]);

  const performOCR = async (image) => {
    const worker = await createWorker('kor+eng', 1, {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          // setLoadingText(`Processing... ${Math.round(m.progress * 100)}%`);
        }
      },
    });
    const { data: { text } } = await worker.recognize(image);
    await worker.terminate();
    return text;
  };

  return (
    <>
      {text && <div>
        <p>{text?.hang1}</p>
        <p>{text?.hang2}</p>
        <p>{text?.hang3}</p>
      </div>}
    </>
  );
};

export default ScanComponent;
