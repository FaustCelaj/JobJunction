import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import Grid from "@mui/material/Grid";

// need to pass data from the search query to be able to display data dynamically
const jobListingsData = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    description: "Crafting high-quality front-end experiences.",
    location: "Remote",
    locationType: "Remote",
    jobFunction: "Engineering",
    salary: "80,000 - 100,000",
    isActive: true,
    company: "Tech Innovate",
  },
  {
    id: 2,
    title: "AI Specialist",
    description: "Develop cutting-edge AI systems.",
    location: "On-site",
    locationType: "In Office",
    jobFunction: "Research & Science",
    salary: "100,000 - 150,000",
    isActive: true,
    company: "Tech Innovate",
  },
  {
    id: 3,
    title: "Mechanical Engineer",
    description: "Designing next-gen automotive machinery.",
    location: "Remote",
    locationType: "Remote",
    jobFunction: "Research & Science",
    salary: "80,000 - 100,000",
    isActive: true,
    company: "Auto Drive",
  },
  {
    id: 4,
    title: "Automotive Designer",
    description: "Shaping the cars of the future.",
    location: "Remote",
    locationType: "Hybrid",
    jobFunction: "Other",
    salary: "80,000 - 100,000",
    isActive: true,
    company: "Auto Drive",
  },
  {
    id: 5,
    title: "Quality Assurance Engineer",
    description: "Ensuring product quality and reliability.",
    location: "Remote",
    locationType: "Hybrid",
    jobFunction: "Engineering",
    salary: "60,000 - 80,000",
    isActive: true,
    company: "Auto Drive",
  },
  {
    id: 6,
    title: "Supply Chain Analyst",
    description: "Optimizing supply chain processes.",
    location: "Remote",
    locationType: "Remote",
    jobFunction: "Operations",
    salary: "60,000 - 80,000",
    isActive: true,
    company: "Auto Drive",
  },
  {
    id: 7,
    title: "Product Manager",
    description: "Leading product development initiatives.",
    location: "Remote",
    locationType: "Hybrid",
    jobFunction: "Product & Project Management",
    salary: "100,000 - 150,000",
    isActive: true,
    company: "Auto Drive",
  },
  {
    id: 8,
    title: "Sales Strategist",
    description: "Developing sales strategies and customer relationships.",
    location: "Remote",
    locationType: "In Office",
    jobFunction: "Sales",
    salary: "40,000 - 60,000",
    isActive: true,
    company: "Auto Drive",
  },

];

const JobCard = (({ job }) => (
  <Card variant="outlined" sx={styles.card}>
    <Box sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography gutterBottom variant="h5" component="div">
          {job.title}
        </Typography>
        <Chip
          label={job.jobFunction}
          color="primary"
          size="small"
          variant="outlined"
        />
      </Stack>
      <Typography gutterBottom variant="subtitle2" component="div">
        {job.company}
      </Typography>
      <Typography color="text.secondary" variant="body2">
        {job.description}
      </Typography>
    </Box>
    <Divider />
    <Box sx={{ p: 2 }}>
      <Typography gutterBottom variant="body2">
        At A Glance
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          color="info"
          icon={<HomeWorkOutlinedIcon />}
          label={job.locationType}
          size="small"
        />
        <Chip
          color="success"
          icon={<AttachMoneyOutlinedIcon />}
          label={job.salary}
          size="small"
        />
      </Stack>
    </Box>
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Button variant="contained">View Posting</Button>
    </Box>
  </Card>
));

const styles = {
  card: {
    maxWidth: 345,
    m: "auto",
    minHeight: 300,
    maxHeight: 300,
    display: "flex",
    flexDirection: "column",
  },
};

const JobListings = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {jobListingsData.map((job) => (
        <Grid item xs={12} sm={6} lg={3} key={job.id}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobListings;
