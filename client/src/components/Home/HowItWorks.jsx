import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const StepCard = ({ IconComponent, title, description }) => (
  <Card elevation={3}>
    <CardContent>
      <IconComponent style={{ fontSize: "3rem" }} />
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography color="textSecondary">{description}</Typography>
    </CardContent>
  </Card>
);

const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ flexGrow: 1, padding: theme.spacing(3) }}>
      <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: theme.spacing(6) }}>
        How JobJunction works 
      </Typography>
      <Grid
        container
        spacing={3}
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={4}>
          <StepCard
            IconComponent={AccountCircleIcon}
            title="Create Account"
            description="It’s very easy to open an account and start your journey."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StepCard
            IconComponent={AssignmentIcon}
            title="Complete your profile"
            description="Complete your profile and add your details to help you get noticed."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StepCard
            IconComponent={WorkOutlineIcon}
            title="Search and Apply"
            description="Apply to various jobs nationally and expand your horizons."
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HowItWorks;
