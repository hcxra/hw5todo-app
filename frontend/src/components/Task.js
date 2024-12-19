import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task._id, { completed: !task.completed })}
      />
      {task.title}
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </li>
  );
};

export default Task; // Ensure default export
