import JobSeekerProfile from './jobseekerprofile';
import CompanyOwnerProfile from './companyownerprofile';

const ProfilePage = ({ userRole }) => {
  return (
    <div>
      {userRole === 'jobseeker' && <JobSeekerProfile />}
      {userRole === 'companyowner' && <CompanyOwnerProfile />}
    </div>
  );
};

export default ProfilePage;



