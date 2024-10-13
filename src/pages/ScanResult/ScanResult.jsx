import React, { useEffect, useState } from 'react'
import ScanHeader from '../../components/ScanHeader/ScanHeader'
import { Typography, Box } from '@mui/material'
import "./ScanResult.css"
import ScanTest from '../../components/ScanTest/ScanTest'


function ScanResult() {

    return (
        <Box id="scan_result">
            <ScanHeader title="사업자등록증 촬영" />
            <Box id="scan_title">
                <Typography variant='h2'>카메라로 사업자등록증을 자동 활영합니다.</Typography>
                <Typography variant='h2'>사각형에 맞게 놓아주세요.</Typography>
            </Box>
            <Box className="result">
                <ScanTest />
            </Box>
        </Box>
    )
}

export default ScanResult
