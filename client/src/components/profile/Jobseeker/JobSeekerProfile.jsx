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

  // Edit states for each field
  const [editStates, setEditStates] = useState({});

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEdit = (field) => {
    setEditStates({ ...editStates, [field]: true });
  };

  const handleSave = (field) => {
    setEditStates({ ...editStates, [field]: false });
    // Implement save logic here, possibly involving API calls
  };

  const handleCancel = (field, initialValue) => {
    setUserData({ ...userData, [field]: initialValue });
    setEditStates({ ...editStates, [field]: false });
  };

  const renderInputField = (label, name, value) => {
    const initialValue = userData[name];

    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          label={label}
          name={name}
          value={value}
          onChange={(e) => handleChange(e, "user")}
          disabled={!editStates[name]}
        />
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
        {renderInputField("Username", "username", userData.username)}
        {renderInputField("Email", "email", userData.email)}
        {renderInputField("Password", "password", userData.password)}
        {renderInputField("First Name", "firstName", userData.firstName)}
        {renderInputField("Last Name", "lastName", userData.lastName)}
        {renderInputField("Resume URL", "resumeURL", userData.resumeURL)}
      </Box>
    </Box>
  );
};

export default UserProfileForm;
