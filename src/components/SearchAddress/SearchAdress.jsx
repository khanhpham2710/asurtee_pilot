import React from 'react';
import { Button, Typography } from '@mui/material';

const buttonStyle = {
    height: '30px',
    width: '76px',
    borderRadius: '50px',
    border: '1px solid #ea3062',
    padding: '0',
};

const style = {
    fontFamily: "AppleSDGothicNeoM",
    fontSize: "14px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#ea3062",
}

function SearchAdress() {
    return (
        <Button variant="outlined" sx={buttonStyle}>
            <Typography variant="h6" sx={style}>
                주소검색
            </Typography>
        </Button>
    );
}

export default SearchAdress;
