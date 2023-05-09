import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import App from '../App';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
