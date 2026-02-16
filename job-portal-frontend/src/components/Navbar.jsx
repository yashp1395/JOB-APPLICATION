import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from './features/auth/authSlice'; // Adjust path if needed

const Navbar = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <nav>
            <ul>
                {auth.isAuthenticated ? (
                    <>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/jobs">Jobs</Link>
                        </li>
                        <li>
                            <Link to="/post-job">Post Job</Link>
                        </li>
                        <li>
                            <Link to="/referrals">Referrals</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;