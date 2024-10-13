import { Box, Typography } from '@mui/material'
import React from 'react'
import "./ScanHeader.css"

function ScanHeader({title}) {
    return (
        <Box id="scan_header">
            <Typography variant='h2'>{title}</Typography>
        </Box>
    )
}

export default ScanHeader
