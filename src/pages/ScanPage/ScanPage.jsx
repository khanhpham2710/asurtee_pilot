import React, { useRef, useEffect, useState } from 'react'
import ScanHeader from '../../components/ScanHeader/ScanHeader'
import { Typography, Box, Button } from '@mui/material'
import "./ScanPage.css"
import Camera from '../../components/Camera/Camera'
import { useNavigate } from 'react-router-dom'


function ScanPage() {
    const cameraRef = useRef();
    const [url, setUrl] = useState(null);
    const navigate = useNavigate()

    const handleCapture = async () => {
        if (cameraRef.current) {
            await cameraRef.current.capturePhoto();
            navigate("/result")
        }
    };

    useEffect(() => {
        if (url) {
            sessionStorage.setItem("url", url)
        }
    }, [url]);

    return (
        <Box id="scan_result">
            <ScanHeader title="사업자등록증 촬영" />
            <Box id="scan_title">
                <Typography variant='h2'>카메라로 사업자등록증을 자동 활영합니다. <br /> 사각형에 맞게 놓아주세요.</Typography>
            </Box>
            <Box id="camera">
                <Camera ref={cameraRef} setUrl={setUrl} />
            </Box>
            <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
                <Button sx={{ m: "30px auto", width: "90px", p: "10px" }} onClick={handleCapture} variant="contained">Capture</Button>
            </Box>
        </Box>
    )
}

export default ScanPage
