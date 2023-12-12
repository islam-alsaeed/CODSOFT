import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import backgroundImage from '../images/header-work.jpg';

const StyleHeader = styled(Box)(({ theme }) => (
  {
    position: 'relative',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 400,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.15)', // Adjust the alpha value (0.0 to 1.0)
    }
  }
));

const NotFound = () => {
  return (
    <>
      <Grid>
        <Navbar />
        <StyleHeader>
          <Box
            sx={{
              height: '82.2vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff', // Choose an appropriate text color
            }}
          >
            <h1
              style={{
                fontSize: '4em', // Adjust the font size
                fontWeight: 'bold', // Adjust the font weight
                textShadow: '3px 3px 5px rgba(0, 0, 0, 0.6)', // Add a subtle text shadow
              }}
            >
              Page not found!
            </h1>
          </Box>
        </StyleHeader>

        <Footer />
      </Grid>
    </>
  )
}

export default NotFound