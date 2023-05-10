import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

import api from './services/api';

import './index.css';

function App() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/products');
        setListProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap mx-auto w-11/12 mb-10">
        {listProducts.length > 0 ? (
          listProducts.map((product) => {
            return (
              <Link key={product.id} to={`/productdetail/${product.id}`}>
                <ProductCard
                  thumbnail={product.thumbnail}
                  title={product.title}
                  description={product.description}
                  brand={product.brand}
                  price={product.price}
                />
              </Link>
            );
          })
        ) : (
          <h2 className='font-medium text-lg'>Carregando...</h2>
        )}
      </div>
    </div>
  );
}

export default App;
