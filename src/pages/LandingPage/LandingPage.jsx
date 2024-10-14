import React from 'react';
import images from '../../assets/images';
import MyOption from '../../components/MyOption/MyOption';
import { Box, Typography } from '@mui/material';

import "./LandingPage.css"
import Footer from '../../components/Footer/Footer';
import LandingHeader from '../../components/LandingHeader/LandingHeader';

function LandingPage() {
    return (
        <>
            <LandingHeader />
            <main>
                <Box id="banner">
                    <Typography variant='h1'>병원/약국</Typography>
                    <Typography variant='h1' style={{ color: "#ff8d02" }}>풍수해보험</Typography>
                    <Typography variant='h1'>무료가입</Typography>
                </Box>
                <Box id="slogan">
                    <Typography variant='h6'>입력 방식을 선택해 주세요.</Typography>
                </Box>
                <Box id="options">
                    <MyOption
                        image={images.submit}
                        line1="사업자등록번호"
                        line2="직접입력"
                        link="/submit" />
                    <MyOption
                        image={images.scan}
                        line1="사업자등증"
                        line2="촬영(스캔)입력"
                        link="/scan" />
                </Box>
                <img src={images.city} id='city' />
            </main>
            <Footer />
        </>
    );
}

export default LandingPage;
