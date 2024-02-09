import React from 'react';
import EditableFormModal from './formModal';

const JobSeekerProfile = () => {
  return (
    <div>
      <h1>Job Seeker Profile</h1>
      <div className="profile-section">
        <EditableFormModal title="Personal Information" fields={['Full Name', 'Email', 'Phone Number', 'Location', 'Professional Title', 'Profile Picture']} />
        <EditableFormModal title="Summary" fields={['Bio']} textarea={true} />
        <EditableFormModal title="Work Experience" fields={['Job Title', 'Company Name', 'Location', 'Start Date', 'End Date', 'Responsibilities']} multiple={true} />
        <EditableFormModal title="Education" fields={['Degree', 'Institution Name', 'Graduation Year']} multiple={true} />
        <EditableFormModal title="Skills" fields={['Skill']} multiple={true} />
        <EditableFormModal title="Certifications/Awards" fields={['Certification/Award Name', 'Institution', 'Date']} multiple={true} />
        <EditableFormModal title="Portfolio/Projects" fields={['Project Title', 'Description', 'Link']} multiple={true} />
        <EditableFormModal title="References" fields={['Reference Name', 'Contact Information']} multiple={true} note="References available upon request." />
      </div>
    </div>
  );
};

export default JobSeekerProfile;
