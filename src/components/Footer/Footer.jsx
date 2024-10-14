import React from 'react'
import "./Footer.css"
import { Box, Typography, Divider } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import images from '../../assets/images'

function Footer() {
    function handleScroll() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer style={{ backgroundColor: "#000" }}>
            <Box id="logo">
                <img src={images.assuretee} className='logo' />
                <img src={images.top} className='scroll_button' onClick={handleScroll} />
            </Box>
            <Divider sx={{ bgcolor: "#3a3a3a" }} />
            <Box id="contact">
                <Typography>주식회사 어슈어티</Typography>
                <Typography>대표 : 김영환</Typography>
                <Typography>사업자 등록번호 : 536-87-01775</Typography>
                <Typography>대리점 등록번호 : 제 2020080048호</Typography>
                <Typography>주소 : 서울특별시 마포구 마포대로 34, 6층</Typography>
                <Typography>고객센터 : 1588-5683</Typography>
                <Typography>팩스 : 02-6008-0801</Typography>
                <Typography>이메일 : info@assuretee.co.kr</Typography>
            </Box>
            <Accordion className='faq'>
                <AccordionSummary
                    expandIcon={<AddIcon style={{ color: "#fff" }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: "#fff", backgroundColor: "#343434", height: "38px" }}
                >
                    관련사이트
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Typography className='copyright'>© assuretee Inc. All Rights Reserved.</Typography>
        </footer>
    )
}

export default Footer
