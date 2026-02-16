import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <>
            <Navbar />
            <div style={{ padding: '2rem' }}>
                <h2>Welcome, {user?.name || 'User'}!</h2>
            </div>
        </>
    );
};

export default Dashboard;