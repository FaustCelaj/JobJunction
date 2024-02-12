import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Logout = ({ onLogout }) => {
  const navigate = useNavigate(); 

  useEffect(() => {
    // Performs the logout operations
    localStorage.removeItem('authToken');

    if (onLogout) {
      onLogout();
    }

    // Redirects the user to the login page after logout
    setTimeout(() => navigate('/'), 1000); // waits 1 second before redirecting
  }, [onLogout, navigate]);

  // Renders a confirmation message
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      fontSize: '20px',
      //fontWeight: 'bold',
    }}>
      Logging out...
    </div>
  );
};

export default Logout;
