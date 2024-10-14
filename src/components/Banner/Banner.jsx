import { Typography } from '@mui/material'
import React from 'react'
import "./Banner.css"

function Banner({line1, line2}) {
  return (
    <div id='option_banner'>
      <Typography variant='h1'>{line1} <br/>{line2}</Typography>
    </div>
  )
}

export default Banner
