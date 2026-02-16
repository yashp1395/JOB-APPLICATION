import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetchReferrals } from '../features/referrals/referralService';
import { setReferrals } from '../store/referralsSlice';

const Referrals = () => {
    const dispatch = useDispatch();
    const referrals = useSelector(state => state.referrals.referrals);

    useEffect(() => {
        const getReferrals = async () => {
            const data = await fetchReferrals();
            dispatch(setReferrals(data));
        };
        getReferrals();
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <div className="referrals-page">
                <h2>Referral List</h2>
                <ul>
                    {referrals && referrals.length > 0 ? (
                        referrals.map(referral => (
                            <li key={referral.id}>
                                <strong>{referral.name}</strong> - {referral.email}
                            </li>
                        ))
                    ) : (
                        <li>No referrals found.</li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Referrals;