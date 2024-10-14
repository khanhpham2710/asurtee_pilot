import React from 'react';
import { Button as Mui_Button } from '@mui/material';

function Button({ text, handleClick, active }) {
    const style = {
        width: "300px",
        height: "50px",
        borderRadius: "25px",
        backgroundColor: active ? "#ff8d02" : "#c8c8c8",
        fontFamily: "AppleSDGothicNeoEB",
        fontSize: "16px",
        lineHeight: "1.22",
        textAlign: "center",
        color: "#fff !important",
        marginBottom: "30px"
    };

    return (
        <Mui_Button sx={style} className={`my_button ${active ? 'active' : ''}`} onClick={handleClick} disabled={!active}>
            {text}
        </Mui_Button>
    );
}

export default Button