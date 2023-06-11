import { useNavigate } from 'react-router-dom';

import { CardProps } from './types';

const ProductCards = ({
  id,
  nome,
  imagemUrl,
  fornecedor,
  valor,
}: CardProps) => {
  const navigate = useNavigate();

  function navigateToDetails(id: string) {
    navigate(`/produtos/${id}`);
  }


  return (
    <div>
      <ul className="rounded-md border border-primary shadow-sm text-gray-700 hover:shadow-lg transition-shadow duration-150 ease-out cursor-pointer">
        <li key={id}>
          <h2 className="font-semibold text-lg mb-3 px-5 py-4">{nome}</h2>
          <img src={imagemUrl} alt={nome} className="mb-6" />
          <h3 className="text-sm mb-1 px-5">{fornecedor}</h3>
          <h2 className="text-2xl font-semibold px-5 mb-3">R$ {valor}</h2>
          <button
            type="submit"
            onClick={() => navigateToDetails(id)}
            className="w-full bg-primary bottom-0 py-2 text-lg font-medium hover:bg-[#ffd849] transition-colors duration-200 ease-out"
          >
            Saiba mais
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductCards;
