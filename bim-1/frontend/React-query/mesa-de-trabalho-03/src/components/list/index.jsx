/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import useAlunos from '../../hooks/useAlunos';

import { HiPencilSquare, HiTrash } from 'react-icons/hi2';

export default function StudentList(props) {
  const { formData, setFormData } = props;
  const { deleteAluno, alunos, isFetching, error } = useAlunos();

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
      <div className='flex justify-between items-center mb-10'>
        <h2 className="text-xl font-medium  text-gray-200">
          Alunos Cadastrados
        </h2>
        <h3 className='text-lg font-medium text-gray-200'>Total de Alunos: {alunos.length} </h3>
      </div>
      <table className="table-fixed w-full">
        <thead className="border-t border-b border-gray-600 text-gray-200">
          <tr className="">
            <th className="py-1">Ordem</th>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Curso</th>
            <th>Bimestre</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {alunos.map((aluno, index) => (
            <tr key={index} className="border-b border-gray-600">
              <>
                <td className="py-1 text-center">{index + 1}</td>
                <td>{aluno.nome}</td>
                <td className="py-1 text-center">{aluno.matricula}</td>
                <td className="py-1 text-start">{aluno.curso}</td>
                <td className="py-1 text-center">{aluno.bimestre}</td>
                <td className="flex justify-center items-center py-2 text-lg">
                  <HiPencilSquare
                    onClick={() => FillFields(aluno)}
                    className="text-green-500 cursor-pointer"
                  />
                  <HiTrash
                    onClick={() => delAluno(aluno._id)}
                    className="text-red-400 ml-4 cursor-pointer"
                  />
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
