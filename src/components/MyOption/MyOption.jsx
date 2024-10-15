import { Typography, Box } from '@mui/material';
import React from 'react';
import './MyOption.css';
import { useNavigate } from 'react-router-dom';

function MyOption({ image, line1, line2, link }) {
    const navigate = useNavigate()

    function handeleClick() {
        navigate(link)
    }

    return (
        <Box className='option' onClick={handeleClick}>
            <img src={image} alt={line1} />
            <Box className='text-container'>
                <Typography variant='h5'>{line1} <br /> {line2}</Typography>
            </Box>
        </Box>
    );
}

export default MyOption;
