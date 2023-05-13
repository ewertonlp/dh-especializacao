import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts';
import Home from '../pages/home';
import Login from '../pages/login';
import ProductDetail from '../pages/productDetail';
import AuthProvider from '../context/authContext';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoute;
