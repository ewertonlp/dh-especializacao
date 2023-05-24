/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';

import getCursos from '../../requests/cursos';
import useAlunos from '../../hooks/useAlunos';

export default function Form(props) {
  const { formData, setFormData, clearState } = props;
  const { saveAluno, editAluno, error } = useAlunos();

  const { data, isFetching } = useQuery(['@cursos'], getCursos, {
    refetchOnWindowFocus: false,
  });

  function save() {
    saveAluno({
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  function edit() {
    editAluno({
      id: formData.id,
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  if (error) {
    return <h3>Erro ao salvar aluno...</h3>;
  }

  if (isFetching) {
    return <h2>carregando...</h2>;
  }

  return (
    <div className="md:grid md:grid-cols-7 sm:flex sm:flex-col gap-6  justify-items-stretch items-center mt-10 mx-auto ">
      <input
        placeholder="Nome"
        value={formData.nome}
        onChange={(event) =>
          setFormData({ ...formData, nome: event.target.value })
        }
        className="col-span-2 py-2 px-4 w-full text-lg bg-gray-100 rounded-lg placeholder:text-gray-800 outline-none"
      />
      <input
        placeholder="Matrícula"
        value={formData.matricula}
        onChange={(event) =>
          setFormData({ ...formData, matricula: event.target.value })
        }
        className="py-2 px-4 w-full rounded-lg text-lg bg-gray-100 placeholder:text-gray-800 outline-none"
      />

      <select
        value={formData.curso}
        onChange={(event) =>
          setFormData({ ...formData, curso: event.target.value })
        }
        className="col-span-2 py-2 px-4 w-full text-lg rounded-lg bg-gray-100 placeholder:text-gray-800 outline-none"
      >
        <option hidden>Selecione um curso</option>
        {data.cursos.map((curso, idx) => (
          <option key={idx}>{curso.name}</option>
        ))}
      </select>
      <input
        placeholder="Bimestre"
        value={formData.bimestre}
        onChange={(event) =>
          setFormData({ ...formData, bimestre: event.target.value })
        }
        className=" py-2 px-4 w-full rounded-lg text-lg bg-gray-100  placeholder:text-gray-800 outline-none"
      />
      <button
        onClick={formData.id ? edit : save}
        className="py-2 px-8 w-full rounded-lg text-white text-lg text-medium bg-blue-600 hover:bg-blue-500 transition-colors duration-200 ease-out"
      >
        Salvar
      </button>
    </div>
  );
}
