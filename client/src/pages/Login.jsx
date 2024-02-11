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
    <div className="login-container">
      <h2>Login</h2>
      <RoleSelection role={role} setRole={setRole} />
      {submitted ? (
        <ProfilePage role={role} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
