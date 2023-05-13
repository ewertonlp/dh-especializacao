import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Header = () => {
  const { logout, userData } = useContext(AuthContext);
  return (
    <nav className="flex md:justify-center items-center sm:justify-between relative text-white w-full mx-auto h-auto py-4 bg-purple-800 mb-10">
      <Link to="/">
        <p className="text-3xl sm:pl-10">Shop Products</p>
      </Link>
      <div className="flex items-center absolute right-0 md:pr-32 sm:pr-10">
        <p className="mr-6 text-lg">{userData}</p>

        <button
          onClick={logout}
          className="bg-yellow-400 text-neutral-700 font-semibold py-1 px-6 rounded-xl hover:bg-yellow-500 transition-colors duration-200 ease-out"
        >
          Sair
        </button>
      </div>
    </nav>
  );
};

export default Header;
