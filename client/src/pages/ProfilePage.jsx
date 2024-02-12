import JobSeekerProfile from "../components/profile/jobseekerprofile";
import CompanyOwnerProfile from "../components/profile/companyownerprofile";

const ProfilePage = ({ role }) => {
  return (
    <div>
      {role === "jobseeker" ? <JobSeekerProfile /> : <CompanyOwnerProfile />}
      {/* {role === "companyowner" && <CompanyOwnerProfile />} */}
      {role !== "jobseeker" && role !== "companyowner" && (
        <p>Role not recognized or user profile is unavailable.</p> // To handle unexpected or undefined roles
      )}
    </div>
  );
};

export default ProfilePage;
