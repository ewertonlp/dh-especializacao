import React from 'react'
import { Link } from 'react-router-dom';

const FormLogin = () => {
  return (
    <form className="sm:w-full md:w-1/2 lg:w-1/4 bg-white shadow-md rounded-md flex flex-col justify-center items-center p-8">
      <h2 className="font-medium text-lg pb-6">Login</h2>
      <p>Entre com seus dados para acessar o sistema.</p>
      <input type="text" placeholder="Digite seu email" className="w-full border border-[#D1D1D1] bg-[#F5F5F5] rounded-md my-4 p-2" />
      <input type="password" placeholder="Digite sua senha" className="w-full border border-[#D1D1D1] bg-[#F5F5F5] rounded-md my-4 p-2" />

      <button type="submit" className="w-full bg-primary font-medium my-4 py-2 rounded-md hover:bg-[#ffd849] transition-colors duration-200 ease-out">Entrar</button>

      <p className='mt-2'>Não possui conta? 
      <Link to="/cadastro" className='pl-2 text-primary font-medium'>Clique Aqui!</Link></p>
    </form>
  )
}

export default FormLogin;