/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import Validation from './validation';

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const { fillUserEmail } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleInput(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (
      Object.keys(errors).length === 0 &&
      values.email !== '' &&
      values.password !== ''
    ) {
      fillUserEmail(values.email);
      navigate('/');
    }
  };

  return (
    <div className="grid grid-rows bg-purple-800 h-screen w-full">
      <div>
        <p className="text-3xl text-center text-white pt-4">Shop Products</p>
      </div>
      <div className="mx-auto w-full">
        <form className="mx-auto w-1/4 bg-white rounded-lg shadow-xl text-center">
          <p className="text-3xl font-medium text-neutral-700 pt-12 pb-6">
            Login
          </p>
          <p className="text-xl font-medium text-neutral-700 pb-4">
            <span>Insira seus dados para entrar no sistema</span>
          </p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInput}
            className="border border-neutral-400 mt-6 px-5 py-3 rounded-2xl w-10/12 outline-purple-700"
          />
          <div>
            {errors.email && (
              <span className="text-red-400 font-medium">{errors.email}</span>
            )}
          </div>
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={values.password}
            onChange={handleInput}
            className="border border-neutral-400 mt-6 px-5 py-3 rounded-2xl w-10/12 outline-purple-700"
          />
          <div>
            {errors.password && (
              <span className="text-red-400 font-medium">
                {errors.password}
              </span>
            )}
          </div>
          <div className="py-12">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-10/12 bg-yellow-400 rounded-2xl py-2 font-medium text-2xl text-neutral-700 hover:bg-yellow-500 transition-colors duration-200 ease-out"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-end justify-center pb-4">
        <p className="text-white">Todos os direitos reservados | 2023</p>
      </div>
    </div>
  );
};

export default Login;
