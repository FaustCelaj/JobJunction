import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ONEJOB } from "../../utils/queries";
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
  IconButton,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const IndividualJob = ({ jobId }) => {
  // const navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_ONEJOB, {
    variables: { jobid: jobId },
  });
  const jobListings = data?.onejob || [];

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [addApplication] = useMutation(ADD_APPLICATION);

  const handleApplyClick = async () => {
    // if (!Auth.loggedIn()) {
    //   alert("Please log in to apply");
    //   return;
    // }
    try {
      await addApplication({
        variables: {
          job: jobId,
          applicant: Auth.getProfile().data._id,
          status: "Applied",
        },
      });
      setOpenSnackbar(true);
    } catch (err) {
      console.error("Error applying to job:", err);
    }
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

  if (loading) return <div>Loading job details...</div>;

  return (
    <div>
      {jobListings.map((j) => (
        <Card key={j._id} sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 2 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {j.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {j.company?.name}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {j.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2">
              Location: {j.location} ({j.locationType})
            </Typography>
            <Typography variant="body2">Salary: {j.salary}</Typography>
            <Typography variant="body2">
              Job Function: {j.jobFunction}
            </Typography>
          </CardContent>
          <CardActions>
            <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
              Back to Search
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
              onClick={handleApplyClick}
            >
              Apply Now
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
      ))}
    </div>
  );
};

export default IndividualJob;
