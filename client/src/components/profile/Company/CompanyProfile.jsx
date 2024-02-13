import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthService from "../../../utils/auth";
import decode from "jwt-decode";
import CompanyTabs from "./CompanyTabs";

const CompanyProfile = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const token = AuthService.getToken();
    if (token) {
      try {
        const decoded = decode(token);
        setUserDetails(decoded.data); // Assuming all user details are under decoded.data
      } catch (e) {
        console.error("Error decoding token:", e);
      }
    }
  }, []);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Hello, {userDetails.email || 'Account'} - welcome to your profile!
      </Typography>
      <CompanyTabs userDetails={userDetails} />
    </div>
  );
};

export default CompanyProfile;
