import React from 'react';

const JobCard = ({ job, showApplyButton = false, onApply }) => {
    if (!job) return null;

    return (
        <div className="job-card">
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <p>{job.description}</p>
            {showApplyButton && (
                <button onClick={() => onApply && onApply(job)}>
                    Apply
                </button>
            )}
        </div>
    );
};

export default JobCard;