import { Box, Grid, styled } from '@mui/material'
import backgroundImage from '../images/header-work.jpg';

const Stylebackground = styled(Box)(({ theme }) => (
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
  export default Stylebackground