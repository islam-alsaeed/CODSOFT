import { Box, useTheme } from '@mui/material'
import React from 'react'

const Footer = () => {
  const {palette}=useTheme();
  return (
    <>
    <Box sx={{
      bgcolor:palette.secondary.midNightGreen,
      alignItems:'center',
      justifyContent:'center',
      height:'50px',
      display: 'flex',

    }}>
      <Box sx={{color:palette.primary.main}} component='footer'> CodSoft Inten</Box>
    </Box>
    </>
  )
}

export default Footer