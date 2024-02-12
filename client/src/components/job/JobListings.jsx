import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALLJOBS } from "../../utils/queries";
import { Grid, Card, Box, Chip, Stack, Divider, Button, Typography } from "@mui/material";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => (
  <Card variant="outlined" sx={styles.card}>
    <Box sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography gutterBottom variant="h5" component="div">
          {job.title}
        </Typography>
        {/* <Chip
          label={job.jobFunction}
          color="primary"
          size="small"
          variant="outlined"
        /> */}
      </Stack>
      <Typography gutterBottom variant="subtitle2" component="div">
        {job.company.name} {/* Assuming company is an object with a name property */}
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
    <Button component={Link} to={`/job/${job._id}`} variant="contained">View Posting</Button>
    </Box>
  </Card>
);

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

const JobListings = ({ searchTerm, category }) => {
  const { loading, error, data } = useQuery(QUERY_ALLJOBS, {
    variables: { title: searchTerm, jobFunction: category },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading jobs.</p>;

  const jobs = data?.openjobs || [];

  return (
    <Grid container spacing={2} justifyContent="center">
      {jobs.map((job) => (
        <Grid item xs={12} sm={6} lg={3} key={job._id}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobListings;
