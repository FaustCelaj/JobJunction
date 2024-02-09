import React from 'react';

// This could also come from props if you're passing the job listings down from a parent component
const jobListingsData = [
  { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'San Francisco, CA' },
  { id: 2, title: 'Graphic Designer', company: 'DesignStudio', location: 'New York, NY' },
  // ... more job listings
];

const JobListings = () => {
  return (
    <div className="job-listings">
      <h2>Job Listings</h2>
      <ul>
        {jobListingsData.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            {/* More details and a link to apply could go here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
