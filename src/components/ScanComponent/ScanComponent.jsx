import React, { useState, useEffect } from 'react';
import { createWorker } from 'tesseract.js';
import { useParams } from 'react-router-dom';

const ScanComponent = ({ url, infos, setInfos }) => {
  const { number } = useParams()

  const removeParentheses = (text) => {
    const index = text.indexOf('(');
    if (index !== -1) {
        const outside = text.slice(0, index).trim();
        const inside = text.slice(index + 1, text.indexOf(')')).trim(); 
        return { outside, inside }; 
    }
    return { outside: text.trim(), inside: null }; 
}

  const extractBusinessInfo = async (lines) => {
    const registrationNumberRegex = /등록번호\s*:\s*(\d{3}-\d{2}-\d{5})/;
    const businessNameRegex = /\(단체명\)\s*:\s*(.+)/;
    const addressRegex = /소재지\s*:\s*([\s\S]*?)(?:본 점 소 재 지|$)/;

    for (let i of lines) {
      if (i.confidence >= 60) { 
        console.log(i.text)

        const registrationNumberMatch = i.text.match(registrationNumberRegex);
        const businessNameMatch = i.text.match(businessNameRegex);
        const addressMatch = i.text.match(addressRegex);

        if (registrationNumberMatch && !infos.등록번호) {
          await setInfos((prev) => ({ ...prev, 등록번호: registrationNumberMatch[1] }));
        }
        else if (businessNameMatch && !infos["상호(법인)명"]) {
          const { outside } = removeParentheses(businessNameMatch[1]);
          setInfos((prev) => ({ ...prev, "상호(법인)명": outside }));
        }
        else if (addressMatch && !infos.주소) {
          const { outside, inside } = removeParentheses(addressMatch[1]);
          await setInfos((prev) => ({ ...prev, 주소: outside, extra: inside }));
        }
      }
    }
  };


  useEffect(() => {
    const handleOcr = async () => {
      if (!url) return;
      try {
        const lines = await performOCR(url)
        extractBusinessInfo(lines)
      } catch (error) {
        console.error("OCR Error:", error);
      }
    };

    handleOcr();
  }, [url]);

  const performOCR = async (image) => {
    const worker = await createWorker('kor', 1, {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          // setLoadingText(`Processing... ${Math.round(m.progress * 100)}%`);
        }
      },
    });
    const { data: { text, block, lines } } = await worker.recognize(image);
    await worker.terminate();
    // return text;
    return lines
  };

  return (
    <>
    </>
  );
};

export default ScanComponent;
