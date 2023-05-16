/* eslint-disable react/prop-types */
import {  } from 'react';

import { HiPencilSquare, HiTrash} from 'react-icons/hi2';

const TaskCard = ({titulo, categoria, date, descricao}) => {
  return (
    <div className="w-11/12 border rounded-lg border-neutral-300 p-4 mt-8">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-medium">{titulo}</h2>
          <p className="text-sm text-neutral-700">{categoria}</p>
        </div>
        <h2 className="text-xl font-medium">{date}</h2>
      </div>
      <div className="flex justify-between pt-4">
        <p className="text-neutral-700">{descricao}</p>
        <div className="flex text-2xl">
          <HiPencilSquare className="text-green-500" />
          <HiTrash className="text-red-400 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
