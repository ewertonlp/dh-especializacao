import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from './services/api';

import './index.css';

function App() {
  const [listProducts, setListProducts] = useState([]);

  const navigate = useNavigate();

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

  function detailProduct(id) {
    navigate(`/productdetail/${id}`);
  }

  return (
    <div>
      <div className="flex justify-center items-center text-white w-full mx-auto h-auto py-4 bg-purple-700 mb-10">
        <p className="text-3xl">Shop Products</p>
      </div>
      <div className="flex flex-wrap mx-auto w-11/12">
        {listProducts.length > 0 ? (
          listProducts.map((product) => {
            return (
              <div
                key={product.id}
                onClick={detailProduct}
                className="flex p-3 w-auto h-40 px-6 border border-neutral-300 rounded-lg m-4 cursor-pointer"
              >
                <div>
                  <img src={product.thumbnail} alt={product.title} className='w-36 max-h-32' />
                </div>
                <div className="grid grid-rows-3 w-48 pl-4">
                  <p className="text-sm font-medium ">
                    {product.description.slice(0, 50)}
                  </p>
                  <p className="font-medium py-1 text-yellow-400 pt-2">
                    {product.brand}
                  </p>
                  <p className="font-semibold text-xl pt-2">
                    $ {product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h2>Carregando...</h2>
        )}
      </div>
    </div>
  );
}

export default App;
