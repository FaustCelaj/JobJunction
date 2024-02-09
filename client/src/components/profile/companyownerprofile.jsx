import EditableFormModal from './formModal';
import JobPostingForm from './JobPostingForm';

const CompanyOwnerProfile = () => {
  return (
    <div>
      {/* Display company owner info */}
      <EditableFormModal />
      <JobPostingForm />
    </div>
  );
};

export default CompanyOwnerProfile;