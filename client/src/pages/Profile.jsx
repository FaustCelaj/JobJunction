import JobSeekerProfile from '../components/profile/jobseekerprofile';
import CompanyOwnerProfile from '../components/profile/companyownerprofile';

const ProfilePage = ({ userRole }) => {
  return (
    <div>
      {userRole === 'jobseeker' && <JobSeekerProfile />}
      {userRole === 'companyowner' && <CompanyOwnerProfile />}
    </div>
  );
};

export default ProfilePage;



