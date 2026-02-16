import axios from '../../api/axiosConfig';

// Login function
export const login = async (userData) => {
    const response = await axios.post('/auth/login', userData);
    return response.data;
};

// Register function
export const register = async (userData) => {
    const response = await axios.post('/auth/register', userData);
    return response.data;
};