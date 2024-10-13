import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = React.forwardRef((props, ref) => {
    const { setUrl } = props
    const webcamRef = useRef();

    const videoConstraints = {
        width: "100%",
        facingMode: "environment"
    };

    const capturePhoto = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
    }, [webcamRef]);

    useImperativeHandle(ref, () => ({
        capturePhoto
    }));

    return (
        <div>
            <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat='image/png'
                videoConstraints={videoConstraints}
            />
        </div>
    );
});

export default Camera;
