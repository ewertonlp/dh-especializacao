import { useQuery } from '@tanstack/react-query';
import getAlunos from '../../requests/alunos';

import { HiPencilSquare, HiTrash } from 'react-icons/hi2';

export default function StudentList() {
  const { data, isFetching } = useQuery(['@alunos'], getAlunos, {
    refetchOnWindowFocus: false,
  });

  console.log(data);

  if (isFetching) {
    return <h3 className="text-white">Buscando alunos...</h3>;
  }

  return (
    <div className="mt-12 text-gray-300">
      <h2 className="text-xl font-medium mb-10">Alunos Cadastrados</h2>
      <table className="table-fixed w-full">
        <thead className="border-t border-b border-gray-600">
          <tr className="">
            <th className="py-1">Ordem</th>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Curso</th>
            <th>Bimestre</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((aluno, index) => (
            <tr key={index} className="border-b border-gray-600">
              <>
                <td className="py-1 text-center">ordem</td>
                <td>{aluno.nome}</td>
                <td className="py-1 text-center">{aluno.matricula}</td>
                <td className="py-1 text-start">{aluno.curso}</td>
                <td className="py-1 text-center">{aluno.bimestre}</td>
                <td className="flex justify-center items-center py-2 text-lg">
                  <HiPencilSquare
                    // onClick={edit}
                    className="text-green-500 cursor-pointer"
                  />
                  <HiTrash
                    // onClick={deleteTask}
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
