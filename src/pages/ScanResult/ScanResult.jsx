import React, { useEffect, useState } from 'react';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { Box, Typography, Divider } from '@mui/material';
import "./ScanResult.css";
import SearchAdress from '../../components/SearchAddress/SearchAdress';
import ScanComponent from '../../components/ScanComponent/ScanComponent';

function Result() {
    const [infos, setInfos] = useState()

    useEffect(()=>{
        const temp = sessionStorage.getItem("infos")
        setInfos(JSON.parse(temp))
    },[])


    const labelStyle = {
        fontFamily: "AppleSDGothicNeoM",
        fontSize: "12px",
        lineHeight: "2.33",
        color: "#000",
    };

    const infoStyle = {
        fontFamily: "AppleSDGothicNeoH",
        fontSize: "16px",
        lineHeight: "1.75",
        color: "#000",
    };

    return (
        <div>
            <LandingHeader />
            <Box id="result">
                <Typography variant='h1'>스캔 정보를 확인해 주세요.</Typography>
            </Box>
            <ScanComponent setInfos={setInfos} />
            <Box className="info" sx={{ margin: "40px 30px 0" }}>
                <div>
                    <Box sx={{ height: "28px", display: "flex", alignItems: "center" }}>
                        <Typography sx={labelStyle} variant='h6'>계약자</Typography>
                    </Box>
                    <Box sx={{ height: "50px", display: "flex", alignItems: "center" }}>
                        <Typography sx={infoStyle} variant='h5'>{infos?.계약자}</Typography>
                    </Box>
                    <Divider sx={{ mb: "20px" }} />
                </div>

                <div>
                    <Box sx={{ height: "28px", display: "flex", alignItems: "center" }}>
                        <Typography sx={labelStyle} variant='h6'>등록번호</Typography>
                    </Box>
                    <Box sx={{ height: "50px", display: "flex", alignItems: "center" }}>
                        <Typography sx={infoStyle} variant='h5'>{infos?.등록번호}</Typography>
                    </Box>
                    <Divider sx={{ mb: "20px" }} />
                </div>

                <div>
                    <Box sx={{ height: "28px", display: "flex", alignItems: "center" }}>
                        <Typography sx={labelStyle} variant='h6'>상호(법인)명</Typography>
                    </Box>
                    <Box sx={{ height: "50px", display: "flex", alignItems: "center" }}>
                        <Typography sx={infoStyle} variant='h5'>{infos ? infos["상호(법인)명"] : null}</Typography>
                    </Box>
                    <Divider sx={{ mb: "20px" }} />
                </div>

                <div>
                    <Box sx={{ height: "28px", display: "flex", alignItems: "center" }}>
                        <Typography sx={labelStyle} variant='h6'>주소</Typography>
                    </Box>
                    <Box sx={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                        <Typography sx={infoStyle} variant='h5'>{infos?.주소}</Typography>
                        <SearchAdress />
                    </Box>
                    <Divider sx={{ mb: "20px" }} />
                </div>

                <div>
                    <Box sx={{ height: "50px", display: "flex", alignItems: "center" }}>
                        <Typography sx={infoStyle} variant='h5'>{infos?.extra}</Typography>
                    </Box>
                    <Divider sx={{ mb: "20px" }} />
                </div>
            </Box>
            <Box className="result_button">
                <Button text="가입신청" active={true} />
            </Box>
            <Footer />
        </div >
    );
}

export default Result;
