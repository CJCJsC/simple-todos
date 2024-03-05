import React from 'react';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (

      <li>
        <span>{task.text}</span>
        <button onClick={() => onDeleteClick(task)}>&times;</button>
        <input
            type="checkbox"
            checked={!!task.isChecked}
            onClick={() => onCheckboxClick(task)}
            readOnly
        />
        <span>{task.text}</span>
        <ul>
          {tasks.map(task => <Task
              key={task._id}
              task={task}
              onCheckboxClick={toggleChecked}
              onDeleteClick={deleteTask}
          />)}
        </ul>
      </li>

  );
};