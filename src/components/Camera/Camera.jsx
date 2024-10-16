import React, { useCallback, useImperativeHandle, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { Box } from '@mui/material';

const Camera = React.forwardRef((props, ref) => {
    const { setUrl } = props;
    const webcamRef = useRef();
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();

    const videoConstraints = {
        facingMode: "environment"
    };

    const capturePhoto = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
    }, [webcamRef, setUrl]);

    useImperativeHandle(ref, () => ({
        capturePhoto
    }));

    
    useEffect(() => {
        const checkWebcam = async () => {
            try {
                await navigator.mediaDevices.getUserMedia({ video: videoConstraints });
                setLoading(false); 
            } catch (error) {
                console.error("Camera permission denied:", error);
                setLoading(false); 
            }
        };

        checkWebcam();
    }, [videoConstraints]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {loading ? (
                <Box style={{
                    width: '100%', height: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}>
                    <p>Loading camera...</p>
                </Box>
            ) : (
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat='image/png'
                    videoConstraints={videoConstraints}
                    forceScreenshotSourceSize={true}
                    style={{ width: '100%', height: '100%' }}
                />
            )}
        </div>
    );
});

export default Camera;
