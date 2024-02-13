import React, { useState, useEffect } from "react";
import ProfilePage from "../pages/ProfilePage";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import LockIcon from "@mui/icons-material/Lock";
import { Container, Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";

const LoginPage = () => {
  const [role, setRole] = useState("");
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [login, { error }] = useMutation(LOGIN);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  useEffect(() => {
    if (submitted) {
      console.log(role, "Logged in successfully");
    }
  }, [role, submitted]);

  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <LockIcon sx={{ fontSize: 60, color: 'primary.main' }} />
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Role</FormLabel>
          <RadioGroup row name="role" value={role} onChange={handleRoleChange}>
            <FormControlLabel value="jobseeker" control={<Radio />} label="Job Seeker" />
            <FormControlLabel value="company" control={<Radio />} label="Company" />
          </RadioGroup>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
          variant="outlined"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
      {submitted && <ProfilePage role={role} />}
    </Container>
  );
};

export default LoginPage;