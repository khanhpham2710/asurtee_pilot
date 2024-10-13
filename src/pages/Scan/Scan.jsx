import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import { Typography, Box, Button } from '@mui/material';
import "./Scan.css";
import { useNavigate } from 'react-router-dom';
import Camera from '../../components/Camera/Camera';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Scan() {
  const navigate = useNavigate();
  const cameraRef = useRef();
  const [url, setUrl] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleCapture = async () => {
    if (cameraRef.current) {
      await cameraRef.current.capturePhoto();
      setOpen(true)
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    navigate("/result")
  }

  useEffect(() => {
    if (url) {
      localStorage.setItem("url", url)
    }
  }, [url]);

  return (
    <div style={{ maxHeight: "100vh" }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to use this image?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={url} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => {
            handleClose()
            handleAgree()
          }} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Header title="사업자등록증 촬영" />
      <Banner line1="촬영을 위해 사업자등록증을" line2="준비해 주세요." />
      <Box id="sub_title">
        <Typography variant='h3'>기본 정보 입력을 위해</Typography>
        <Typography variant='h3'>고객님의 사업자등록증이 필요해요.</Typography>
      </Box>
      <Box id="scan_area">
        <Camera ref={cameraRef} setUrl={setUrl} />
      </Box>
      <Box id="button" className="scan_button">
        <Button onClick={handleCapture} className="button active">
          사업자등록증 촬영하기
        </Button>
      </Box>
    </div>
  );
}

export default Scan;
