import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  ButtonGroup,
  MenuItem,
} from "@mui/material";


const UserProfileForm = () => {
  // User data state
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    resumeURL: "",
  });

  // Company data state
  const [companyData, setCompanyData] = useState({
    name: "",
    description: "",
    industry: "",
    companySize: "",
    location: "",
    contactEmail: "",
    website: "",
  });

  // Edit states for each field
  const [editStates, setEditStates] = useState({});

  // Industries and company sizes (simplified for example purposes)
  const industries = [
    "Education",
    "Information Technology",
    "Healthcare",
    // Add more industries as needed
  ];

  const companySizes = [
    "1-200 employees",
    "201-500 employees",
    // Add more sizes as needed
  ];

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "user") {
      setUserData({ ...userData, [name]: value });
    } else {
      setCompanyData({ ...companyData, [name]: value });
    }
  };

  const handleEdit = (field) => {
    setEditStates({ ...editStates, [field]: true });
  };

  const handleSave = (field) => {
    setEditStates({ ...editStates, [field]: false });
    // Implement save logic here, possibly involving API calls
  };

  const handleCancel = (field, initialValue) => {
    if (userData[field] !== undefined) {
      setUserData({ ...userData, [field]: initialValue });
    } else if (companyData[field] !== undefined) {
      setCompanyData({ ...companyData, [field]: initialValue });
    }
    setEditStates({ ...editStates, [field]: false });
  };

  const renderInputField = (label, name, value, type, selectOptions = null) => {
    const isUserField = type === "user";
    const initialValue = isUserField ? userData[name] : companyData[name];

    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          label={label}
          name={name}
          value={value}
          onChange={(e) => handleChange(e, type)}
          disabled={!editStates[name]}
          select={Boolean(selectOptions)}
        >
          {selectOptions?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <ButtonGroup
          variant="contained"
          aria-label="Edit save cancel button group"
        >
          <Button onClick={() => handleEdit(name)} disabled={editStates[name]}>
            Edit
          </Button>
          <Button onClick={() => handleSave(name)} disabled={!editStates[name]}>
            Save
          </Button>
          <Button
            onClick={() => handleCancel(name, initialValue)}
            disabled={!editStates[name]}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "100%",
        maxWidth: "800px",
        margin: "auto",
        padding: 2,
      }}
    >
      {/* User Information Section */}
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          User Information
        </Typography>
        {renderInputField("Username", "username", userData.username, "user")}
        {renderInputField("Email", "email", userData.email, "user")}
        {renderInputField("Password", "password", userData.password, "user")}
        {renderInputField(
          "First Name",
          "firstName",
          userData.firstName,
          "user"
        )}
        {renderInputField("Last Name", "lastName", userData.lastName, "user")}
        {renderInputField(
          "Resume URL",
          "resumeURL",
          userData.resumeURL,
          "user"
        )}
      </Box>

      {/* Company Information Section */}
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Company Information
        </Typography>
        {renderInputField("Company Name", "name", companyData.name, "company")}
        {renderInputField(
          "Description",
          "description",
          companyData.description,
          "company"
        )}
        {renderInputField(
          "Industry",
          "industry",
          companyData.industry,
          "company",
          industries
        )}
        {renderInputField(
          "Company Size",
          "companySize",
          companyData.companySize,
          "company",
          companySizes
        )}
        {renderInputField(
          "Location",
          "location",
          companyData.location,
          "company"
        )}
        {renderInputField(
          "Contact Email",
          "contactEmail",
          companyData.contactEmail,
          "company"
        )}
        {renderInputField("Website", "website", companyData.website, "company")}
      </Box>
    </Box>
  );
};

export default UserProfileForm;
