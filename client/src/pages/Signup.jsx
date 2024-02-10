import { useState } from "react";
import RoleSelection from "../components/authentication/roleSelection";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const SignUp = () => {
  // State to hold the selected role
  const [role, setRole] = useState("jobseeker");
  const [jobSeekerState, setjobSeekerState] = useState({
    email: "",
    password: "",
  });
  const [CompanyState, setCompanyState] = useState({
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER);

  // State for holding job seeker sign-up form data
  // const [jobSeekerName, setJobSeekerName] = useState("");
  // const [jobSeekerEmail, setJobSeekerEmail] = useState("");
  // const [jobSeekerPassword, setJobSeekerPassword] = useState("");

  // State for holding company sign-up form data
  // const [companyName, setCompanyName] = useState("");
  // const [companyEmail, setCompanyEmail] = useState("");
  // const [companyPassword, setCompanyPassword] = useState("");

  // Function to handle the form submission for both job seekers and companies
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (role === "jobseeker") {
      // Sign-up logic for job seeker
      const mutationResponse = await addUser({
        variables: {
          username: jobSeekerState.jobSeekerName,
          email: jobSeekerState.jobSeekerEmail,
          password: jobSeekerState.jobSeekerPassword,
          role: "jobseeker",
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      console.log("User Added and Json token created");
    } else {
      // Sign-up logic for company

      const mutationResponse = await addUser({
        variables: {
          username: CompanyState.companyName,
          email: CompanyState.companyEmail,
          password: CompanyState.companyPassword,
          role: "company",
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      console.log("Company Added and Json token created");
    }
  };
  const handleJobSeekarChange = (event) => {
    const { name, value } = event.target;
    setjobSeekerState({
      ...jobSeekerState,
      [name]: value,
    });
  };

  const handleCompanyChange = (event) => {
    const { name, value } = event.target;
    setCompanyState({
      ...CompanyState,
      [name]: value,
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <RoleSelection role={role} setRole={setRole} />

      <form onSubmit={handleSubmit}>
        {role === "jobseeker" && (
          <>
            <div className="form-group">
              <label htmlFor="jobSeekerName">Name:</label>
              <input
                type="text"
                id="jobSeekerName"
                name="jobSeekerName"
                // value={jobSeekerName}
                // onChange={(e) => handleJobSeekarChange(e.target.value)}
                onChange={handleJobSeekarChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobSeekerEmail">Email:</label>
              <input
                type="email"
                id="jobSeekerEmail"
                name="jobSeekerEmail"
                // value={jobSeekerEmail}
                // onChange={(e) => handleJobSeekarChange(e.target.value)}
                onChange={handleJobSeekarChange}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobSeekerPassword">Password:</label>
              <input
                type="password"
                id="jobSeekerPassword"
                name="jobSeekerPassword"
                // value={jobSeekerPassword}
                // onChange={(e) => handleJobSeekarChange(e.target.value)}
                onChange={handleJobSeekarChange}
                required
                placeholder="Create a Password"
              />
            </div>
          </>
        )}

        {role === "company" && (
          <>
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                // value={companyName}
                // onChange={(e) => handleCompanyChange(e.target.value)}
                onChange={handleCompanyChange}
                required
                placeholder="Your Company's Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyEmail">Email:</label>
              <input
                type="email"
                id="companyEmail"
                name="companyEmail"
                // value={companyEmail}
                // onChange={(e) => handleCompanyChange(e.target.value)}
                onChange={handleCompanyChange}
                required
                placeholder="Company Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyPassword">Password:</label>
              <input
                type="password"
                id="companyPassword"
                name="companyPassword"
                // value={companyPassword}
                // onChange={(e) => handleCompanyChange(e.target.value)}
                onChange={handleCompanyChange}
                required
                placeholder="Create a Password"
              />
            </div>
          </>
        )}

        <button type="submit" className="signup-button">
          {role === "jobseeker"
            ? "Sign Up as Job Seeker"
            : "Sign Up as Company"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
