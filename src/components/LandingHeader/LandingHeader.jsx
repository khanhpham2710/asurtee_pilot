import React from 'react'
import images from '../../assets/images'
import "./LandingHeader.css"

function LandingHeader() {
    return (
        <header>
            <img className="logo1" src={images.logo1} />
            <img className="logo2" src={images.x} />
            <img className="logo3" src={images.logo2} />
        </header>
    )
}

export default LandingHeader
