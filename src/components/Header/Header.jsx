import { Box, Typography } from '@mui/material'
import React from 'react'
import "./Header.css"
import images from '../../assets/images'
import { useNavigate } from 'react-router-dom'

function Header({title}) {
    const navigate = useNavigate()

    function handleBack(){
        navigate("/")
    }

    return (
        <Box id="header">
            <img src={images.back} className='back' onClick={handleBack}/>
            <Typography variant='h2'>{title}</Typography>
        </Box>
    )
}

export default Header
