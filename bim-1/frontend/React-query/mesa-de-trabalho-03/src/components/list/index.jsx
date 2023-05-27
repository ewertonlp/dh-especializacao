/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import useAlunos from '../../hooks/useAlunos';
import ModalCustom from '../modal';

import { HiPencilSquare, HiTrash } from 'react-icons/hi2';

export default function StudentList(props) {
  const { formData, setFormData } = props;
  const { deleteAluno, alunos, isFetching, error } = useAlunos();
  const [ selectedAluno, setSelectedAluno ] = useState({});
  const [ isOpen, setIsOpen ] = useState(false);

  function FillFields(aluno) {
    setFormData({ ...aluno, id: aluno._id });
  }

  function delAluno(id) {
    deleteAluno(id);
  }

  if (isFetching) {
    return <h3 className="text-white">Buscando alunos...</h3>;
  }

  return (
    <div className="mt-12 ">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-medium  text-gray-200">
          Alunos Cadastrados
        </h2>
        <h3 className="text-lg font-medium text-gray-200">
          Total de Alunos: {alunos.length-1}
        </h3>
      </div>
      <table className="table-fixed w-full">
        <thead className="border-t border-b border-gray-600 text-gray-200">
          <tr className="">
            <th className="py-1 px-5 text-left">Ordem</th>
            <th className="py-1 px-5 text-left">Nome</th>
            <th className="py-1 px-5 text-left">Matrícula</th>
            <th className="py-1 px-3 text-left">Curso</th>
            <th className="py-1 px-8 text-left">Bimestre</th>
            <th className="py-1 px-5 text-left">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {alunos.map((aluno, index) => (
            <tr key={index} className="border-b border-gray-600">
              <>
                <td className="py-1 px-5 text-left">{index + 1}</td>
                <td className="py-1 px-5 text-left">{aluno.nome}</td>
                <td className="py-1 px-5 text-left">{aluno.matricula}</td>
                <td className="py-1 px-3 text-left">{aluno.curso}</td>
                <td className="py-1 px-8 text-left">{aluno.bimestre}</td>
                <td className="flex justify-start items-center py-2 px-5 text-lg">
                  <HiPencilSquare
                    onClick={() => FillFields(aluno)}
                    className="text-green-500 cursor-pointer"
                  />
                  <HiTrash
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedAluno(aluno);
                    }}
                    className="text-red-400 ml-4 cursor-pointer"
                  />
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalCustom isOpen={isOpen} onAfterClose={() => setSelectedAluno({})} onRequestClose={() => setIsOpen(false)}>
        <div>
          <h2 className='mb-4 text-xl text-center font-medium text-slate-800'>Confirmar exclusão</h2>
          <p className='mb-4 text=slate-800'>Deseja realmente excluir o aluno {selectedAluno.nome}?</p>
        </div>
        <div className='flex justify-center items-center'>
          <button 
           onClick={() => {
            delAluno(selectedAluno._id);
            setIsOpen(false);
              }} 
           className='mx-2 rounded-md text-white bg-green-500 px-8 py-2 text-sm font-medium hover:bg-green-800 transition-colors duration-200 ease-out'>
            Sim
          </button>
          <button  
            onClick={() => {
              setIsOpen(false);
            }}
            className='mx-2 rounded-md text-white bg-red-500 px-8 py-2 text-sm font-medium hover:bg-red-800 transition-colors duration-200 ease-out'>
            Não
          </button>
        </div>
      </ModalCustom>
    </div>
  );
}
