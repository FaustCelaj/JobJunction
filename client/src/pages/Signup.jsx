import { useState } from "react";
// import RoleSelection from "../components/authentication/roleSelection";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import LockIcon from "@mui/icons-material/Lock";

const SignUp = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (role === "jobseeker") {
      const mutationResponse = await addUser({
        variables: {
          email: jobSeekerState.email,
          password: jobSeekerState.password,
          role: "jobseeker",
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      console.log("User Added and Json token created");
    } else {
      const mutationResponse = await addUser({
        variables: {
          email: CompanyState.email,
          password: CompanyState.password,
          role: "company",
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      console.log("Company Added and Json token created");
    }
  };

  const handleJobSeekerChange = (event) => {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        padding: "20px",
      }}
    >
      <LockIcon style={{ fontSize: "50px", color: "blue" }} />{" "}
      {/* Paper plane logo */}
      <h2 style={{ textAlign: "center", fontSize: "40px", color: "black" }}>
        Sign Up
      </h2>
      {/* <RoleSelection role={role} setRole={setRole} /> */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {role === "jobseeker" && (
          <>
            <div className="form-group">
              <label htmlFor="jobSeekerEmail">Email:</label>
              <input
                type="email"
                id="jobSeekerEmail"
                name="email"
                value={jobSeekerState.email}
                onChange={handleJobSeekerChange}
                required
                placeholder="Your Email"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  marginTop: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobSeekerPassword">Password:</label>
              <input
                type="password"
                id="jobSeekerPassword"
                name="password"
                value={jobSeekerState.password}
                onChange={handleJobSeekerChange}
                required
                placeholder="Create a Password"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </>
        )}

        {role === "company" && (
          <>
            <div className="form-group">
              <label htmlFor="companyEmail">Email:</label>
              <input
                type="email"
                id="companyEmail"
                name="email"
                value={CompanyState.email}
                onChange={handleCompanyChange}
                required
                placeholder="Company Email"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  marginTop: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyPassword">Password:</label>
              <input
                type="password"
                id="companyPassword"
                name="password"
                value={CompanyState.password}
                onChange={handleCompanyChange}
                required
                placeholder="Create a Password"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="signup-button"
          style={{
            marginTop: "20px",
            padding: "10px",
            width: "100%",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {role === "jobseeker"
            ? "Sign Up as Job Seeker"
            : "Sign Up as Company"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
