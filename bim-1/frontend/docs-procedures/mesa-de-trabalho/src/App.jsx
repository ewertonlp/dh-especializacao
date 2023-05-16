/* eslint-disable no-unused-vars */
import { useState } from 'react';

import TaskCard from './components/taskCard';
import api from './services/api';

import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const categoria = [
  { id: 1, nome: 'Trabalho' },
  { id: 2, nome: 'Lazer' },
  { id: 3, nome: 'Prioridade' },
  { id: 4, nome: 'Outros' },
];

function App() {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    date: '',
    descricao: '',
  });

  function handleInput(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function postTask() {
    const response = await api.post('todo');
    
  }

  console.log(formData);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-full h-screen">
        <div className="col-span-1 bg-gradient-to-b from-sky-500 to-indigo-500">
          <form className="flex flex-col justify-center items-center w-10/12 mx-auto my-48 bg-white rounded-lg shadow-lg">
            <h2 className="font-medium text-xl text-neutral-800 py-12">
              Cadastrar Tarefa
            </h2>
            <input
              type="text"
              placeholder="Título"
              name="titulo"
              onChange={handleInput}
              value={formData.titulo}
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            />
            <select className="w-10/12 p-2 mb-10 border-b border-neutral-500">
              <option disabled>Categoria</option>
              {categoria.map((categoria) => (
                <option
                  key={categoria.id}
                  name="categoria"
                  onChange={handleInput}
                  value={formData.categoria}
                >
                  {categoria.nome}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              onChange={handleInput}
              value={formData.date}
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            />
            <input
              type="text"
              placeholder="Descrição"
              name="descricao"
              onChange={handleInput}
              value={formData.descricao}
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            />
            <button
              type="submit"
              className="flex justify-center items-center w-10/12 py-3 mt-6 mb-12 bg-gradient-to-b from-sky-500 to-indigo-500 rounded-lg text-white font-medium"
            >
              Salvar Tarefa
              <HiOutlineArrowLongRight className="ml-2 text-2xl" />
            </button>
          </form>
        </div>
        <div className="col-span-2 mt-10 ml-8">
          <div className="flex justify-between items-center w-11/12">
            <h2 className="font-medium text-2xl text-neutral-800">
              Minhas Tarefas
            </h2>
            <p className="text-sm mr-1">3 tarefas pendentes</p>
          </div>
          <TaskCard
            titulo={formData.titulo}
            categoria={formData.categoria}
            date={formData.date}
            descricao={formData.descricao}
          />
        </div>
      </div>
    </>
  );
}

export default App;
