import { Navigate } from 'react-router-dom';
import { useAuth } from '../modules/auth';

export const ProtectedRoute = ({ element, allowedRoles }: any) => {
  const { auth } = useAuth();

  // If the user does not have access, redirect to the unauthorized page
  if (!allowedRoles.includes(auth?.roles)) {
    return <Navigate to="/unauthorized" />;
  }

  return element; // Render the requested component if access is granted
};