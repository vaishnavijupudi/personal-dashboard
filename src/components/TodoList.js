import React, { useState } from 'react';

const TodoList = ({ todos, handleDelete, handleEdit, handleCheckbox }) => {
  
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {todos.map((t, index) => (
        <li
          key={t.id}
          style={{
            borderRadius: '50px',
            margin: '10px 0',
            padding: '10px 20px',
            alignItems: 'center',
            display: 'flex',
            width: '450px',
            backgroundColor: index % 2 === 0 ? '#94C3C3' : '#35AAAB', // Alternating colors
          }}
        >
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => handleCheckbox(t.id)}
            style={{ marginRight: '10px' }}
          />
          <span style={{ flex: 1, textDecoration: t.completed ? 'line-through' : 'none' }}>{t.todo}</span>
          <button
            style={{ border: 'none', padding: '10px', borderRadius: '20px', margin: '0 5px' }}
            onClick={() => handleEdit(t.id)}
          >
            Edit
          </button>
          <button
            style={{ border: 'none', padding: '10px', borderRadius: '20px', margin: '0 5px' }}
            onClick={() => handleDelete(t.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
