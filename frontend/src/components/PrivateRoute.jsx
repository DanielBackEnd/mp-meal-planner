import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { userInfoMP } = useSelector(state => state.auth);

  return userInfoMP ? <Outlet /> : <Navigate to='/' replace />;
};

export default PrivateRoute;
