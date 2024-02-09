import React from 'react';
import EditableFormModal from './formModal';
import JobPostingForm from './JobPostingForm';

const CompanyOwnerProfile = () => {
  return (
    <div>
      <h1>Company Owner Profile</h1>
      <div className="profile-section">
        <EditableFormModal title="Company Information" fields={['Company Name', 'Industry/Sector', 'Location', 'Company Description']} />
      </div>
      <div className="job-posting-section">
        <h2>Job Postings</h2>
        {/* Job posting form for creating and managing job listings */}
        <JobPostingForm />
      </div>
    </div>
  );
};

export default CompanyOwnerProfile;
