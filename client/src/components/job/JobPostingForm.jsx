import React, { useState } from 'react';

const JobPostingForm = ({ onSubmit, jobData, onCancel }) => {
  const [formData, setFormData] = useState(jobData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCancel = () => {
    // Define what happens when cancel is clicked. E.g., close modal or reset form
    onCancel();
  };

  return (
    <div className="job-posting-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" value={formData.title || ''} onChange={handleChange} required />
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName || ''} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={formData.location || ''} onChange={handleChange} />
        <textarea name="description" placeholder="Job Description" value={formData.description || ''} onChange={handleChange} required></textarea>
        <button type="submit">Save Job Posting</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default JobPostingForm;
