import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Container, Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const SignUp = () => {
  const [role, setRole] = useState("");
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = formState;
    try {
      const mutationResponse = await addUser({
        variables: {
          username,
          email,
          password,
          role,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      console.log(`${role.charAt(0).toUpperCase() + role.slice(1)} Added and Json token created`);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    // Reset form state when changing roles
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LockIcon sx={{ m: 1, fontSize: 50, color: 'primary.main' }} />
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">I am a:</FormLabel>
            <RadioGroup
              row
              aria-label="role"
              name="role"
              value={role}
              onChange={handleRoleChange}
            >
              <FormControlLabel value="jobseeker" control={<Radio />} label="Job Seeker" />
              <FormControlLabel value="company" control={<Radio />} label="Company" />
            </RadioGroup>
          </FormControl>
          <TextField
            autoComplete="fname"
            name="username"
            required
            fullWidth
            id="username"
            label={role === "jobseeker" ? "Your Name" : "Company Name"}
            autoFocus
            margin="normal"
            onChange={handleChange}
            value={formState.username}
          />
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            margin="normal"
            onChange={handleChange}
            value={formState.email}
          />
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            margin="normal"
            onChange={handleChange}
            value={formState.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;