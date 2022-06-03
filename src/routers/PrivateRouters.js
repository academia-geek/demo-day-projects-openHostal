import { Navigate } from 'react-router-dom';

const PrivateRouters = ({ isAuth, children }) => {
  return isAuth
    ? children
    : <Navigate to='/landpage' />
}
export default PrivateRouters;