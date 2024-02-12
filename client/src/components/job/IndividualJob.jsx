import React, { useState } from "react";
import { ADD_APPLICATION } from "../../utils/mutations";
import Auth from "../../utils/auth";
import {
  Box,
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
  CardActions,
  Grid,
  Snackbar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const ExampleJobData = {
  title: "Senior Frontend Developer",
  description: "Crafting high-quality front-end experiences.",
  location: "Remote",
  locationType: "Remote",
  jobFunction: "Engineering",
  salary: "80,000 - 100,000",
  isActive: true,
  company: {
    name: "Tech Innovate",
    description: "Leading innovation in tech",
    industry: "Information Technology",
    companySize: "1-200 employees",
    location: "Silicon Valley",
    contactEmail: "contact@techinnovate.com",
    website: "http://techinnovate.com",
    // accountOwner: users[0]._id,
  },
};
const IndividualJob = ({ jobId }) => {
  const { jobId } = useParams();
  const { loading, data } = useQuery(QUERY_ONEJOB, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { jobId: jobId },
  });
  const onejob = data?.onejob || {}; // Sigle job selected from Job listing

  const job = ExampleJobData;

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [addApplication] = useMutation(ADD_APPLICATION);
  const handleApplyClick = async () => {
    // Logic to handle job application can go here
    const mutationResponse = await addApplication({
      variables: {
        job: jobId,
        applicant: Auth.getProfile().data.username,
        status: "applied",
      },
    });
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 2 }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h4">{job.title}</Typography>
          <Button variant="contained" color="primary" startIcon={<SendIcon />}>
            Apply Now
          </Button>
        </Grid>
        <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
          {job.location} ({job.locationType})
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {job.description}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Job Function: {job.jobFunction}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Salary: {job.salary}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6">Company Information</Typography>
        <Typography variant="body1">Name: {job.company.name}</Typography>
        <Typography variant="body1">
          Industry: {job.company.industry}
        </Typography>
        <Typography variant="body1">Size: {job.company.companySize}</Typography>
        <Typography variant="body1">
          Location: {job.company.location}
        </Typography>
        <Typography variant="body1">
          Website:{" "}
          <a
            href={job.company.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {job.company.website}
          </a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          Back to Search
        </Button>
      </CardActions>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Successfully applied"
        action={action}
      />
    </Card>
  );
};

export default IndividualJob;
