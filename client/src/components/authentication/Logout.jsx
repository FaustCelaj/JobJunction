import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 

const Logout = ({ onLogout }) => {
  const history = useHistory(); 

  useEffect(() => {
    // Performs the logout operations
    localStorage.removeItem('authToken');

    if (onLogout) {
      onLogout();
    }

    // Redirects the user to the login page after logout
    setTimeout(() => history.push('/login'), 1000); // waits 1 second before redirecting
  }, [onLogout, history]);

  // Renders a confirmation message
  return (
    <div>Logging out...</div>
  );
};

export default Logout;
