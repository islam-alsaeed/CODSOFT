import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

export const JobLocationComponent = ({ LocationChange, location }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="location-filter-label" >Select Location</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                    id="demo-simple-select"
                value={location}
                onChange={LocationChange}
            >
                <MenuItem value="">All Locations</MenuItem>
                {/* Check if uniqueLocation exists before mapping over it */}
                {location && location.map((loc, index) => (
                    <MenuItem key={index} value={loc}>
                        {loc}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
export const JobCateComponent = ({ handleCategoryChange, cat }) => {

    const { jobType } = useSelector(state => state.allJobType);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cat}
                    label="Category"
                    onChange={handleCategoryChange}
                >
                    <MenuItem value="">All</MenuItem>
                    {
                        jobType && jobType.map(jt => (
                            <MenuItem key={jt._id} value={jt._id}>{jt.JobTypeName}</MenuItem>
                        ))
                    }


                </Select>
            </FormControl>
        </Box>
    )
}

// export default JobCateComponent