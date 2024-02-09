import { useState } from 'react';
import RoleSelection from '../components/authentication/roleSelection';

const SignUp = () => {
  // State to hold the selected role
  const [role, setRole] = useState('jobseeker');

  // State for holding job seeker sign-up form data
  const [jobSeekerName, setJobSeekerName] = useState('');
  const [jobSeekerEmail, setJobSeekerEmail] = useState('');
  const [jobSeekerPassword, setJobSeekerPassword] = useState('');
  // ... other job seeker specific state variables

  // State for holding company sign-up form data
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  // ... other company specific state variables

  // Function to handle the form submission for both job seekers and companies
  const handleSubmit = (event) => {
    event.preventDefault();
    if (role === 'jobseeker') {
      // Sign-up logic for job seeker
      console.log('Job Seeker Sign Up:', { jobSeekerName, jobSeekerEmail, jobSeekerPassword });
      // Handle the job seeker sign-up logic here
    } else {
      // Sign-up logic for company
      console.log('Company Sign Up:', { companyName, companyEmail, companyPassword });
      // Handle the company sign-up logic here
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <RoleSelection role={role} setRole={setRole} />
      
      <form onSubmit={handleSubmit}>
        {role === 'jobseeker' && (
          <>
            <div className="form-group">
              <label htmlFor="jobSeekerName">Name:</label>
              <input
                type="text"
                id="jobSeekerName"
                value={jobSeekerName}
                onChange={(e) => setJobSeekerName(e.target.value)}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobSeekerEmail">Email:</label>
              <input
                type="email"
                id="jobSeekerEmail"
                value={jobSeekerEmail}
                onChange={(e) => setJobSeekerEmail(e.target.value)}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobSeekerPassword">Password:</label>
              <input
                type="password"
                id="jobSeekerPassword"
                value={jobSeekerPassword}
                onChange={(e) => setJobSeekerPassword(e.target.value)}
                required
                placeholder="Create a Password"
              />
            </div>
          </>
        )}
        
        {role === 'company' && (
          <>
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                placeholder="Your Company's Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyEmail">Email:</label>
              <input
                type="email"
                id="companyEmail"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                required
                placeholder="Company Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyPassword">Password:</label>
              <input
                type="password"
                id="companyPassword"
                value={companyPassword}
                onChange={(e) => setCompanyPassword(e.target.value)}
                required
                placeholder="Create a Password"
              />
            </div>
          </>
        )}

        <button type="submit" className="signup-button">
          {role === 'jobseeker' ? 'Sign Up as Job Seeker' : 'Sign Up as Company'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
