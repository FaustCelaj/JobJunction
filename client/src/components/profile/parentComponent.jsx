import { useState } from 'react';
import FormModal from './formModal'; 

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({}); // profile info, job details, etc.

  // Function to be called when closing the modal
  const onClose = () => {
    setIsModalOpen(false);
  };

  // Function to be called when form data needs to be saved
  const onSave = (data) => {
    setFormData(data);
    onClose(); // Option to close the modal after saving
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Button to trigger modal */}
      <button onClick={openModal}>Edit Profile</button>

      {/* FormModal component */}
      {isModalOpen && (
        <FormModal
          onClose={onClose}
          onSave={onSave}
          fields={[
            { name: 'name', label: 'Name', type: 'text', required: true },
            // Add other field definitions here
          ]}
        />
      )}
    </div>
  );
};

export default ParentComponent;
