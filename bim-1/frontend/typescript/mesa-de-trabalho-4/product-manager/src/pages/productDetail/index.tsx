import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateProduct, deleteProduct } from '../../services/fetchProducts';
import { Product, fetchProductsById } from '../../services/fetchProducts';

import Header from '../../components/header';

import { FiEdit3, FiTrash2 } from 'react-icons/fi';

const ProductDetail = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState<Product[]>([]);

  async function getProductsById(id: string) {
    const response = await fetchProductsById(id);
    setProduto(response.data);
  }

  useEffect(() => {
    getProductsById(id);
  }, []);

 

  if (!produto) {
    return <div className='mx-auto w-5/12 top-24 text-2xl'>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <div className="flex justify-end items-center mt-20 sm:w-full mx-8 md:w-11/12 lg:w-12/12 gap-3">
        <FiEdit3 className="text-xl w-[50px] h-[50px] p-3 rounded-full border border-primary shadow-md cursor-pointer hover:bg-primary transition-colors duration-200" />
        <FiTrash2 className="text-xl w-[50px] h-[50px] p-3 rounded-full bg-primary shadow-md cursor-pointer  hover:bg-[#ffd849] transition-colors duration-200" />
      </div>
      <div className="sm:w-full md:w-11/12 lg:w-9/12 mx-auto mt-10 md:grid grid-cols-2">
        <img
          src={produto.imagemUrl}
          alt={produto.nome}
          className="md:w-9/12 sm:w-full mx-2"
        />
        <div className="sm:w-11/12 md:w-full mx-8">
          <h2 className="text-3xl mb-20 mt-8">{produto.nome}</h2>
          <h3 className="text-3xl font-medium mb-8">R$ {produto.valor}</h3>
          <p className="mb-2">{produto.fornecedor}</p>
          <p className="mb-16">{produto.descricao}</p>
          <button className="bg-primary px-12 py-2 text-lg font-medium rounded-lg hover:bg-[#ffd849] transition-colors duration-200">
            Comprar
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
