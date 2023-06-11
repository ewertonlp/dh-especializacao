import { useState } from 'react';
import useProducts from '../../hooks/useProducts';

import Header from '../../components/header';
import ProductCards from '../../components/productCards/productCards';
import InsertProductModal from '../../components/modal/insertProductModal';

import { FiPlus } from 'react-icons/fi';

const Products = () => {
  const { produtos, createProduct, updateProduct, deleteProduct, error, isFetching } = useProducts();
  // const [products, setProducts] = useState<Response[]>([]);

  const [formData, setFormData] = useState({
    nome: '',
    valor: '',
    fornecedor: '',
    imagemUrl: '',
    descricao: '',
  });
  const [isModalOpen, setModalOpen] = useState(false);

 
function create() {
  createProduct({
    nome: formData.nome,
    valor: formData.valor,
    fornecedor: formData.fornecedor,
    imagemUrl: formData.imagemUrl,
    descricao: formData.descricao
  });
}

console.log(formData);
  
  if (error) {
    return <h3>Erro ao incluir Produto...</h3>;
  }

  if (isFetching) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Header />
      <h2 className="mx-auto w-11/12 mt-10 text-2xl font-bold border-b border-b-primary">
        Produtos
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 mx-auto w-11/12 gap-6 mt-10">
        {produtos?.map((product) => (
          <ProductCards
            key={product._id}
            id={product._id}
            nome={product.nome}
            imagemUrl={product.imagemUrl}
            fornecedor={product.fornecedor}
            valor={product.valor}
          />
        ))}
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className="absolute bottom-10 right-16 rounded-full p-4 bg-primary text-2xl shadow-md hover:bg-[#ffd849] transition-colors duration-200 ease-out"
      >
        <FiPlus />
      </button>
      <InsertProductModal
        isModalOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <form className="flex flex-col items-center justify-center w-[512px] px-3 rounded-lg">
          <h2 className="text-2xl font-medium my-6">Cadastrar Produto</h2>
          <input
            type="text"
            placeholder="Nome do Produto"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full py-3 px-4 mb-6 rounded-lg bg-neutral-100 border border-neutral-300 placeholder:text-md text-neutral-800 text-md outline-primary"
          />
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Valor"
              value={formData.valor}
              onChange={(e) =>
                setFormData({ ...formData, valor: e.target.value })
              }
              className="w-full py-3 px-4 rounded-lg bg-neutral-100 border border-neutral-300 placeholder:text-md text-neutral-800 text-md outline-primary"
            />
            <input
              type="text"
              placeholder="Fornecedor"
              value={formData.fornecedor}
              onChange={(e) =>
                setFormData({ ...formData, fornecedor: e.target.value })
              }
              className="w-full py-3 px-4 rounded-lg bg-neutral-100 border border-neutral-300 placeholder:text-md text-neutral-800 text-md outline-primary"
            />
          </div>
          <input
            type="text"
            placeholder="Url da imagem"
            value={formData.imagemUrl}
            onChange={(e) =>
              setFormData({ ...formData, imagemUrl: e.target.value })
            }
            className="w-full py-3 px-4 mb-6 rounded-lg bg-neutral-100 border border-neutral-300 placeholder:text-md text-neutral-800 text-md outline-primary"
          />
          <textarea
            rows={4}
            placeholder="Url da imagem"
            value={formData.descricao}
            onChange={(e) =>
              setFormData({ ...formData, descricao: e.target.value })
            }
            className="w-full py-3 px-4 mb-6 rounded-lg bg-neutral-100 border border-neutral-300 placeholder:text-md text-neutral-800 text-md outline-primary"
          />

          <div className="flex justify-center items-center gap-4 mb-6">
            <button
              type="submit"
              onClick={create}
              className="bg-primary w-40 py-2 rounded-lg font-medium"
            >
              Salvar
            </button>
            <button className="bg-white border border-primary w-40 py-2 rounded-lg font-medium text-primary hover:bg-primary hover:text-neutral-800 transition-all duration-200 ease-out">
              Cancelar
            </button>
          </div>
        </form>
      </InsertProductModal>
    </div>
  );
};

export default Products;
