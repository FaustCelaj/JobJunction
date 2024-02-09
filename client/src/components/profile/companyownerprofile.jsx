import EditableFormModal from './formModal';
import JobPostingForm from '../job/JobPostingForm';

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