import axiosInstance from '../../api/axiosConfig';

export async function fetchReferrals() {
    const response = await axiosInstance.get('/referrals');
    return response.data;
}