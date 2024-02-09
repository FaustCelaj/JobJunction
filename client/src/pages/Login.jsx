import { useState } from 'react';
import RoleSelection from '../components/authentication/roleSelection'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('jobseeker'); // Default to 'jobseeker'

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle login goes here
    // This could involve setting state, making an API call, etc.
    console.log(email, password, role);
    // Here you would typically call an authentication service or dispatch a login action
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <RoleSelection role={role} setRole={setRole} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
