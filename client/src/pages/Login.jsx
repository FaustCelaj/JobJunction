import { useState } from "react";
import RoleSelection from "../components/authentication/roleSelection";
import ProfilePage from "../pages/ProfilePage";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [role, setRole] = useState("jobseeker");
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [login, { error }] = useMutation(LOGIN);

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to handle login goes here
    // This could involve setting state, making an API call, etc.
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      setSubmitted(true);
    } catch (e) {
      console.log(e);
    }
    // Here you would typically call an authentication service or dispatch a login action
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <RoleSelection role={role} setRole={setRole} />
      {submitted ? (
        <ProfilePage role={role} />
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', textAlign: 'center' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={{ width: '100%', padding: '10px' }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', textAlign: 'center' }}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              placeholder="Enter your password"
              style={{ width: '100%', padding: '10px' }}
            />
          </div>
          <button type="submit" className="login-button" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
