import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import { Box, Card, Container, Stack, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../redux/actions/jobAction";
import { useParams } from 'react-router-dom';
import JobCard from "../component/JobCard";

const Home = () => {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const [cat, setCat] = React.useState('');
    const [pageNumber, setPage] = useState(1);
    const { keyword, location } = useParams();
    const { jobs, uniqueLocation, pages, loading } = useSelector(state => state.loadJobs)
    useEffect(() => {
        dispatch(jobLoadAction(pageNumber, keyword, cat, location));
    }, [pageNumber, keyword, cat, location])
    return (
        <>
            <Box>

                <Navbar />
                <Header />
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{ flex: 6, p: 2 }}>
                            {
                                jobs && jobs.map((job, e) => (
                                    <JobCard
                                        key={e}
                                        id={job._id}
                                        jobTitle={job.title}
                                        description={job.description}
                                        category={job.jobType ? job.jobType.jobTypeName : "No Job category"}
                                        location={job.location}
                                    />
                                ))
                            }
                        </Box>
                        <Box sx={{ flex: 2, p: 2 }}>
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.secondary.main }}>
                                        Filter Jobs by Category
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Stack>
                </Container>
                <h1>Home page</h1>
            </Box>
        </>
    )
}
export default Home