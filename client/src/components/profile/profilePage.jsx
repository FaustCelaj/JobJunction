import JobSeekerProfile from './jobseekerprofile';
import CompanyOwnerProfile from './companyownerprofile';

const ProfilePage = ({ userRole }) => {
  return (
    <div>
      {userRole === 'jobseeker' && <JobSeekerProfile />}
      {userRole === 'companyowner' && <CompanyOwnerProfile />}
      {userRole !== 'jobseeker' && userRole !== 'companyowner' && (
        <p>Role not recognized or user profile is unavailable.</p> // To handle unexpected or undefined roles
      )}
    </div>
  );
};

export default ProfilePage;