import React from 'react'
import { Box, styled } from '@mui/material';
import headerImage from '../images/header-work.jpg'

const Header = () => {
    const HeaderStyle = styled(Box)(({theme}) => (
        {
            justifyContent: 'center',
            display: 'flex',
            backgroundImage: `url(${headerImage})`,
            minHeight:'500px',
            backgroundPosition:'center',
            backgroundSize:'cover',
            // backgroundColor: theme.palette.secondary.main
            

        }
    ));
    return (
        <>
        <HeaderStyle>
            
        </HeaderStyle>
        </>
    )
}

export default Header