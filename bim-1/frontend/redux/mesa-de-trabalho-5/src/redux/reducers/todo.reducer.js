const State = {
  tasks: [
    {
      title: 'Supermercado',
      date: '2023/06/17',
      description: 'Comprar produtos de limpeza.',
      category: 'Casa',
    },
    {
      title: 'Banho no Billy',
      date: '2023/06/17',
      description: 'Levar o cachorro ao Pet Shop.',
      category: 'Outros',
    },
  ],
};

export default function TodoReducer(state = State, action) {
  const copyState = { ...state };

  switch (action.type) {
    case 'ADD_TASK':
      copyState.tasks.push({ ...action.payload.task });
      return { ...copyState };
    case 'DELETE_TASK':
      copyState.tasks.splice(action.payload.id, 1);
      return { ...copyState };
    default:
      return state;
  }
}
