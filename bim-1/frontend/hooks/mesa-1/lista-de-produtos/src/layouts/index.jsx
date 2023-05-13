import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/header';
import { AuthContext } from '../context/authContext';

const Layout = () => {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=> {
    if (!isLogged) {
      navigate('/login');
    }
  })
  

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
