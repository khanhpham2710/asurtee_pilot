import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import { Box, Button } from '@mui/material';
import "./Submit.css";

function Submit() {
  const [numbers, setNumbers] = useState(Array(10).fill(''));
  const [active, setActive] = useState(false);

  useEffect(() => {
    const check = numbers.every(num => num !== '' && !isNaN(num));
    setActive(check);
  }, [numbers]);

  const handleInputChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const updatedNumbers = [...numbers];
      updatedNumbers[index] = value;
      setNumbers(updatedNumbers);
      
      if (value !== '' && index < numbers.length - 1) {
        const nextInput = document.getElementById(`input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      } else if (value === '' && index > 0) {
        const prevInput = document.getElementById(`input-${index - 1}`);
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  const handleSubmit = () => {
    if (active) {
      const row1 = numbers.slice(0, 3).join("");
      const row2 = numbers.slice(3, 5).join("");
      const row3 = numbers.slice(5, 10).join("");
      window.alert(row1 + " - " + row2 + " - " + row3);
    }
  };

  const style = {
    fontFamily: 'AppleSDGothicNeoH',
    fontSize: '24px',
    textAlign: 'center',
    color: '#ff8d02',
    paddingTop: "4px",
    paddingLeft: "2px",
    borderRadius: '6px',
    lineHeight: '40px',
    width: '40px',
    height: '40px',
    marginTop: "15px",
  };

  return (
    <div>
      <Header title="사업자등록번호 입력" />
      <Banner line1="사업자 등록번호 10자리를" line2="입력해 주세요." />
      <Box id="inputs" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        
        <Box display="flex" justifyContent="center" gap="10px">
          {numbers.slice(0, 3).map((num, index) => (
            <input
              key={index}
              id={`input-${index}`}
              value={num}
              onChange={(e) => handleInputChange(index, e.target.value)}
              maxLength={1}
              style={style}
            />
          ))}
        </Box>

        <Box display="flex" justifyContent="center" gap="10px">
          {numbers.slice(3, 5).map((num, index) => (
            <input
              key={index + 3}
              id={`input-${index + 3}`}
              value={num}
              onChange={(e) => handleInputChange(index + 3, e.target.value)}
              maxLength={1}
              style={style}
            />
          ))}
        </Box>

        <Box display="flex" justifyContent="center" gap="10px">
          {numbers.slice(5, 10).map((num, index) => (
            <input
              key={index + 5}
              id={`input-${index + 5}`}
              value={num}
              onChange={(e) => handleInputChange(index + 5, e.target.value)}
              maxLength={1}
              style={style}
            />
          ))}
        </Box>

      </Box>
      <Box id="button" className="option_button">
        <Button
          className={active ? "button active" : "button"}
          onClick={handleSubmit}
          disabled={!active}
        >
          확인
        </Button>
      </Box>
    </div>
  );
}

export default Submit;
