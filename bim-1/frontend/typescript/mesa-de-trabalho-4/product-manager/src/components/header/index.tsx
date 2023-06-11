import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiAlignJustify } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-[70px] bg-primary flex justify-between items-center sm:px-10 md:px-16 shadow-md z-1">
      <h1 className="text-xl font-semibold">
        <Link to="/">DHProducts</Link>
      </h1>

      <ul className="hidden sm:flex gap-6">
        <li>
          <Link to="/">Produtos</Link>
        </li>
        <li>
          <Link to="/quem-somos">Quem somos</Link>{' '}
        </li>
        <li>Sair</li>
      </ul>

      <FiAlignJustify
        onClick={() => setIsOpen(!isOpen)}
        className="flex sm:hidden cursor-pointer text-2xl"
      />

      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col gap-2 absolute bg-primary w-full h-1/2 mt-[538px] px-8 text-lg pt-10 z-10 sidebar`}
      >
        <li>
          <Link to="/products">Produtos</Link>
        </li>
        <li>
          <Link to="/quem-somos">Quem somos</Link>{' '}
        </li>
        <li>Sair</li>
      </ul>
    </nav>
  );
};

export default Header;
