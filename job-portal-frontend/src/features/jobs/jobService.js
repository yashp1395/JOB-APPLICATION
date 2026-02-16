import axiosInstance from '../../api/axiosConfig';

// Fetch all jobs
export const fetchJobs = async () => {
    const response = await axiosInstance.get('/jobs');
    return response.data;
};

// Post a new job
export const postJob = async (jobData) => {
    const response = await axiosInstance.post('/jobs', jobData);
    return response.data;
};