import React, { useCallback, useImperativeHandle, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

const Camera = React.forwardRef((props, ref) => {
    const { setUrl } = props;
    const webcamRef = useRef();
    const navigate = useNavigate()

    const videoConstraints = {
        width: 1280, 
        height: 720,
        facingMode: "environment"
    };

    const capturePhoto = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
    }, [webcamRef, setUrl]);

    useImperativeHandle(ref, () => ({
        capturePhoto
    }));

    const handleKeyPress = async (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            await capturePhoto();
            navigate("/result")
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat='image/png'
            videoConstraints={videoConstraints}
            forceScreenshotSourceSize={true}
            style={{ width: '100%', height: '100%' }} 
        />
    );
});

export default Camera;
