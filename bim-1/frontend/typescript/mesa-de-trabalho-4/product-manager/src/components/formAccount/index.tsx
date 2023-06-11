import React from 'react'
import { Link } from 'react-router-dom';

const FormAccount = () => {
  return (
    <form className="sm:w-full md:w-1/2 lg:w-1/4 bg-white shadow-md rounded-md flex flex-col justify-center items-center p-8">
      <h2 className="font-medium text-neutral-700 text-lg pb-6">Crie sua Conta</h2>
      <p className='text-neutral-600 text-sm mb-4'>Preencha os campos abaixo para criar uma conta.</p>
      <input type="text" placeholder="Nome Completo" className="w-full border border-[#D1D1D1] bg-[#F5F5F5] rounded-md my-4 p-2" />
      <input type="text" placeholder="Email" className="w-full border border-[#D1D1D1] bg-[#F5F5F5] rounded-md my-4 p-2" />
      <input type="password" placeholder="Senha" className="w-full border border-[#D1D1D1] bg-[#F5F5F5] rounded-md my-4 p-2" />

      <button type="submit" className="w-full bg-primary font-medium my-4 py-2 rounded-md hover:bg-[#ffd849] transition-colors duration-200 ease-out">Cadastrar</button>

      <p className='mt-2 text-neutral-600'>Já possui conta? 
      <Link to="/login" className='pl-2 text-primary font-medium'>Faça o Login!</Link></p>
    </form>
  )
}

export default FormAccount;