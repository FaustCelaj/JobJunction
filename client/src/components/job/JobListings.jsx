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

import { useQuery } from "@apollo/client";
import { QUERY_ALLJOBS } from "../../utils/queries";

const JobCard = ({ job }) => (
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
  console.log({ searchTerm, category });

  const { loading, error, data } = useQuery(QUERY_ALLJOBS, {
    variables: { title: searchTerm, jobFunction: category },
  });

  if (loading) return <p>Loading...</p>;

  const jobs = data?.openjobs || [];
  console.log(jobs);
  console.log(error);


  // const { loading, data } = useQuery(QUERY_ALLJOBS, {
  //   variables: { title: searchTerm, jobFunction: category },
  // });
  // const openjobs = data?.openjobs || {};
  // console.log(openjobs);
  
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
