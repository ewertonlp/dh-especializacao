/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import useTodo from './hooks/useTodo';
import TaskCard from './components/taskCard';
import formatDate from './utils/date';

import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const categoria = [
  { id: 1, nome: 'Trabalho' },
  { id: 2, nome: 'Lazer' },
  { id: 3, nome: 'Prioridade' },
  { id: 4, nome: 'Outros' },
];

function App() {
  const { todos, addTodo, editTodo, deleteTodo, isFetching, error } = useTodo();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const [id, setId] = useState(null);

  if (isFetching) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Não foi possivel carregar as tarefas</h3>;
  }

  function getStates(todo) {
    setId(todo._id);
    setTitle(todo.title);
    const Fdate = todo.date.split('T')[0];
    setDate(Fdate);
    setDescription(todo.description);
    setCategory(todo.category);
  }

  function clearState() {
    setTitle('');
    setCategory('');
    setDate('');
    setDescription('');
  }

  console.log(title, date, description, category);

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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            />

            <input
              type="date"
              placeholder="Data"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            />
            <input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-10/12 p-2 mb-10 border-b border-neutral-500"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              onClick={() => {
                if (id) {
                  editTodo({
                    payload: { title, date, description, category },
                    id: id,
                  });
                  setId(null);
                } else {
                  addTodo({ title, date, description, category });
                }
                clearState();
              }}
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
          </div>

          {todos?.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              category={task.category}
              date={formatDate(task.date)}
              description={task.description}
              deleteTask={() => deleteTodo(task._id)}
              edit={() => getStates(task)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
