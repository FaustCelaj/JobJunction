import { useState } from "react";
import RoleSelection from "../components/authentication/roleSelection";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("jobseeker");
  const [formState, setFormState] = useState({ username: "", email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");

    try {
      // Assuming username is derived from the email, you might want to allow users to set this explicitly
      const username = formState.email.split('@')[0];

      const { data } = await addUser({
        variables: { ...formState, username, role },
      });

      if (data.addUser.token) {
        Auth.login(data.addUser.token); // Assuming Auth.login() handles setting the token and user authentication
        console.log("Sign-up successful, navigating to home page...");
        navigate('/');
      } else {
        console.error("Sign-up failed: No token received");
      }
    } catch (error) {
      console.error("Error during sign-up process:", error);
      // Handle errors (e.g., user already exists, server error) here. You might want to show an error message.
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', padding: '20px' }}>
      <LockIcon style={{ fontSize: '50px', color: 'blue' }} />
      <h2 style={{ textAlign: 'center', fontSize: '40px', color: 'black' }}>Sign Up</h2>
      <RoleSelection role={role} setRole={setRole} />
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            style={{ width: '100%', padding: '10px', marginBottom: '15px', marginTop: '10px', border: '1px solid #ccc' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            required
            placeholder="Create a Password"
            style={{ width: '100%', padding: '10px', marginBottom: '10px', marginTop: '10px', border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" className="signup-button" style={{ marginTop: '20px', padding: '10px', width: '100%', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
