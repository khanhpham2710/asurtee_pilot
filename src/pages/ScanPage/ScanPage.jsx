import React, { useRef, useEffect, useState } from 'react'
import ScanHeader from '../../components/ScanHeader/ScanHeader'
import { Typography, Box, Button } from '@mui/material'
import "./ScanPage.css"
import Camera from '../../components/Camera/Camera'
import { useNavigate } from 'react-router-dom'
import ScanComponent from '../../components/ScanComponent/ScanComponent'


function ScanPage() {
    const cameraRef = useRef();
    const [url, setUrl] = useState(null);
    const [infos, setInfos] = useState({
        계약자: "not_yet",
        등록번호: null,
        "상호(법인)명": null,
        주소: null,
        extra: "not_yet"
    });

    const navigate = useNavigate()

    const handleCapture = async () => {
        if (cameraRef.current) {
            await cameraRef.current.capturePhoto();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleCapture();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const saveInfoAndNavigate = async () => {
            if (infos.등록번호 && infos["상호(법인)명"] && infos.주소) {
                await sessionStorage.setItem("infos", JSON.stringify(infos));
                navigate("/result");
            }
        };
        saveInfoAndNavigate();
    }, [infos]);



    return (
        <Box id="scan_result">
            <ScanHeader title="사업자등록증 촬영" />
            <ScanComponent url={url} infos={infos} setInfos={setInfos} />
            <Box id="scan_title">
                <Typography variant='h2'>카메라로 사업자등록증을 자동 활영합니다. <br /> 사각형에 맞게 놓아주세요.</Typography>
            </Box>
            <Box id="camera">
                <Camera ref={cameraRef} setUrl={setUrl} />
            </Box>
            <div>
                {Object.entries(infos).map(([key, value]) => (
                    <p key={key}>
                        <strong>{key}:</strong> {String(value)}
                    </p>
                ))}
            </div>
        </Box>
    )
}

export default ScanPage
