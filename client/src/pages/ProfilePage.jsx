import { useState, useEffect } from "react";
import AuthService from "../utils/auth"; // Adjust the import path as necessary
import CompanyProfile from '../components/profile/Company/CompanyProfile';
import JobSeekerProfile from '../components/profile/Jobseeker/JobSeekerProfile';
import decode from "jwt-decode";


const ProfilePage = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = AuthService.getToken();
    if (token) {
      try {
        const decoded = decode(token);
        setUserRole(decoded.data.role);
      } catch (e) {
        console.error("Error decoding token:", e);
      }
    }
  }, []);

  return (
    <div>
      {userRole === "jobseeker" ? (
        <JobSeekerProfile />
      ) : (
        <CompanyProfile />
      )}
    </div>
  );
};

export default ProfilePage;


