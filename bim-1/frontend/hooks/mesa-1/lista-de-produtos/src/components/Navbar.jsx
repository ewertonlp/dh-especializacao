import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-center items-center text-white w-full mx-auto h-auto py-4 bg-purple-700 mb-10">
      <Link to="/">
        <p className="text-3xl">Shop Products</p>
      </Link>
    </div>
  );
};

export default Navbar;
