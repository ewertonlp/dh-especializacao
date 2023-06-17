/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TaskCard from './components/taskCard';
import formatDate from './utils/date';
// import formatDate from './utils/date';

import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const categoria = [
  { id: 1, nome: 'Trabalho' },
  { id: 2, nome: 'Lazer' },
  { id: 3, nome: 'Casa' },
  { id: 4, nome: 'Outros' },
];

function App() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    description: '',
  });
  const { tasks } = useSelector((state) => state.tasks);

  function clearState() {
    setFormData.title('');
    setFormData.category('');
    setFormData.date('');
    setFormData.description('');
  }

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
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            />

            <input
              type="date"
              placeholder="Data"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            />
            <input
              type="text"
              placeholder="Descrição"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            />
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            >
              <option value="" disable="true">
                Categoria
              </option>
              {categoria.map((categoria) => (
                <option key={categoria.id} value={categoria.nome}>
                  {categoria.nome}
                </option>
              ))}
            </select>
            <button
              className="flex justify-center items-center w-10/12 py-3 mt-6 mb-12 bg-gradient-to-b from-sky-500 to-indigo-500 rounded-lg text-white font-medium"
              onClick={() => {
                dispatch({ type: 'ADD_TASK', payload: { task: formData } });
                setFormData({
                  title: '',
                  category: '',
                  date: '',
                  description: '',
                });
                clearState();
              }}
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
          </div>

          {tasks?.map((task, index) => (
            <TaskCard
              key={index}
              id={index}
              title={task.title}
              category={task.category}
              date={formatDate(task.date)}
              description={task.description}
              // deleteTask={() => deleteTodo(task._id)}
              // edit={() => getStates(task)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
