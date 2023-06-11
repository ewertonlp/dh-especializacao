import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from '../pages/products';
import Login from '../pages/login';
import CreateAccount from '../pages/account';
import ProductDetail from '../pages/productDetail';
import QuemSomos from '../pages/quem-somos';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CreateAccount />} />
        <Route path="/" element={<Products />} />
        <Route path="/produtos/:id" element={<ProductDetail/>} />
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
