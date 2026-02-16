import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import { fetchJobs } from '../services/jobService';
import { setJobs } from '../store/jobSlice';

const Jobs = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.list);

    useEffect(() => {
        const getJobs = async () => {
            const jobList = await fetchJobs();
            dispatch(setJobs(jobList));
        };
        getJobs();
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <div>
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </>
    );
};

export default Jobs;