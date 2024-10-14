import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Button from "../../components/Button/Button"
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/images';

function Scan() {
  const navigate = useNavigate();

  const style = {
    fontFamily: "AppleSDGothicNeoM",
    fontSize: "16px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.38",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#4e5968"
  }

  return (
    <div style={{ maxHeight: "100vh" }}>
      <Header title="사업자등록증 촬영" />
      <Banner line1="촬영을 위해 사업자등록증을" line2="준비해 주세요." />
      <Box id="sub_title" sx={{m: "17px auto 50px"}}>
        <Typography sx={style} variant='h3'>기본 정보 입력을 위해<br />고객님의 사업자등록증이 필요해요.</Typography>
      </Box>
      <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
        <img src={images.scan_area}/>
      </Box>
      <Box className="option_button">
        <Button text="사업자등록증 촬영하기" handleClick={()=>{navigate("/scanning")}} active={true}/>
      </Box>
    </div>
  );
}

export default Scan;
