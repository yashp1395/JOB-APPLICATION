import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postJob } from '../services/jobService';

const PostJob = () => {
    const [form, setForm] = useState({
        title: '',
        company: '',
        description: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postJob(form);
            navigate('/jobs');
        } catch (error) {
            // Handle error if needed
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Post a New Job</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Job Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Company:</label>
                    <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Post Job</button>
            </form>
        </div>
    );
};

export default PostJob;