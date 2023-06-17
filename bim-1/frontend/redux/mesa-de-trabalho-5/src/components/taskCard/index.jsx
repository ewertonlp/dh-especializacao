import { useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { HiPencilSquare, HiTrash } from 'react-icons/hi2';

// eslint-disable-next-line react/prop-types
const TaskCard = ({ id, title, category, date, description}) => {
  const dispatch = useDispatch();
  
  return (
    <div className="w-11/12 border rounded-lg border-neutral-300 p-4 mt-8">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-medium">{title}</h2>
          <p className="text-sm text-neutral-700">{category}</p>
        </div>
        <h2 className="text-xl font-medium">{date}</h2>
      </div>
      <div className="flex justify-between pt-4">
        <p className="text-neutral-700">{description}</p>
        <div className="flex text-2xl">
          {/* <HiPencilSquare
            onClick={edit}
            className="text-green-500 cursor-pointer"
          /> */}
          <HiTrash
            onClick={() => {
              dispatch({ type: 'DELETE_TASK', payload: { id } })
            }}
            className="text-red-400 ml-2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
