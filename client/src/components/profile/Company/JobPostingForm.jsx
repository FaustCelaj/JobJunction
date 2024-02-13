import React, { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

const locationTypes = ["In Office", "Hybrid", "Remote"];
const jobFunctions = [
  "Administrative",
  "Arts & Design",
  "Business",
  "Customer Services & Support",
  "Education",
  "Engineering",
  "Finance & Accounting",
  "Healthcare",
  "Human Resources",
  "Information Technology",
  "Marketing",
  "Military & Protective Services",
  "Operations",
  "Other",
  "Product & Project Management",
  "Research & Science",
  "Retail & Food Services",
  "Sales",
  "Skilled Labor & Manufacturing",
  "Transportation",
];
const salaryRanges = [
  "40,000 - 60,000",
  "60,000 - 80,000",
  "80,000 - 100,000",
  "100,000 - 150,000",
  "150,000+",
];

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
    onCancel();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        padding: 2,
      }}
    >
      <Typography variant="h6" component="h2" sx={{ textAlign: 'center' }}>
        Job Posting Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Job Title"
          name="title"
          value={formData.title || ''}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Location"
          name="location"
          value={formData.location || ''}
          onChange={handleChange}
          required
        />
        <TextField
          select
          fullWidth
          variant="outlined"
          label="Location Type"
          name="locationType"
          value={formData.locationType || ''}
          onChange={handleChange}
          required
        >
          {locationTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          fullWidth
          variant="outlined"
          label="Job Function"
          name="jobFunction"
          value={formData.jobFunction || ''}
          onChange={handleChange}
        >
          {jobFunctions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          fullWidth
          variant="outlined"
          label="Salary Range"
          name="salary"
          value={formData.salary || ''}
          onChange={handleChange}
          required
        >
          {salaryRanges.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          variant="outlined"
          label="Job Description"
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mt: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            Save Job Posting
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default JobPostingForm;
