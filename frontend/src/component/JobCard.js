import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Correct import

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

// Use the `props` parameter to access properties
const JobCard = ({ jobTitle, description, location, id, category }) => {
    const { palette } = useTheme();

    // Check if description is a string before splitting
    const truncatedDescription =
        typeof description === 'string'
            ? description.split(' ').slice(0, 15).join(' ') + '...'
            : 'Description not available';

    return (
        <Card sx={{ minWidth: 275,  mb: 2, ml: 1, mr: 1 ,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>

                <Typography sx={{ fontSize: 1, color: palette.secondary.main }} gutterBottom>
                    <IconButton>
                        <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 20 }} />
                        {/* Use the `sx` prop to set the font size for location */}
                        <Typography variant="body2" sx={{ fontSize: '0.8rem', marginLeft: 1 }}>
                            {location}
                        </Typography>
                    </IconButton>
                </Typography>
                <Typography variant="h5" component="div">
                    {jobTitle}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {category}
                </Typography>
                <Typography variant="body2">
                    Description: {truncatedDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size="small" startIcon={<AddIcon />}><Link style={{ textDecoration: "none", color: "white" }} to={`/job/${id}`}>Learn More</Link></Button>
            </CardActions>
        </Card>
    );
}

export default JobCard;
