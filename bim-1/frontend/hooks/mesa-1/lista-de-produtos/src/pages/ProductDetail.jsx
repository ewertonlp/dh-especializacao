import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState([]);

  async function getProductById() {
    try {
      const response = await api.get(`/products/${id}`);
      setDetailProduct(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductById();
  });

  return (
    <div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
