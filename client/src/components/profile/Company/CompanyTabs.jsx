import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import JobPostingForm from "./JobPostingForm";
import AccountDetails from "./AccountDetails";
// Assuming ApplicationsTable might also need userDetails in future
// import ApplicationsTable from './ApplicationsTable';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Modified to accept userDetails as a prop
export default function CompanyTabs({ userDetails }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Add A New Job" {...a11yProps(0)} />
          <Tab label="My Jobs" {...a11yProps(1)} />
          <Tab label="Account Details" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <JobPostingForm userDetails={userDetails} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <JobPostingForm userDetails={userDetails} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AccountDetails userDetails={userDetails} />
      </CustomTabPanel>
    </Box>
  );
}
