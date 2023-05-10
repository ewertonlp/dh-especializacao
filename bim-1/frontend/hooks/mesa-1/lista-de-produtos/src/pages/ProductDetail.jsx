import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

import api from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState([]);
  const [showListProducts, setShowListProducts] = useState([]);

  useEffect(() => {
    async function getProductById() {
      try {
        const response = await api.get(`/products/${id}`);
        setDetailProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProductById();
  }, [id]);

  useEffect(() => {
    async function getOtherProducts() {
      try {
        const response = await api.get('/products');
        setShowListProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    getOtherProducts();
  }, []);

  const productId = id;

  const filterProducts = showListProducts.filter(
    (product) => product.id - productId
  );

  const randomProducts = filterProducts.sort(() => Math.random() - 0.5);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 mx-auto w-8/12 py-12">
        <div>
          <img
            src={detailProduct.thumbnail}
            alt={detailProduct.title}
            className="rounded-lg h-80"
          />
        </div>
        <div className="grid grid-rows-2">
          <div>
            <h2 className="text-2xl font-bold pb-2">{detailProduct.title}</h2>
            <p className="font-semibold text-yellow-400 pb-2">
              {detailProduct.brand}
            </p>
            <p className="text-2xl font-bold">$ {detailProduct.price}</p>
          </div>
          <p className="text-sm border rounded-md p-3">
            {detailProduct.description}
          </p>
        </div>
      </div>
      <div className="mx-auto w-10/12 pt-32">
        <p className="text-center font-semibold text-2xl text-neutral-800">
          Veja Outros Produtos
        </p>
        <div className="flex justify-between pt-5">
          {randomProducts.slice(0, 4).map((product) => (
            <Link key={product.id} to={`/productdetail/${product.id}`}>
              <ProductCard
                thumbnail={product.thumbnail}
                title={product.title}
                description={product.description}
                brand={product.brand}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
