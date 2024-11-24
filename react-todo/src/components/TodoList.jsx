import React, { useState } from 'react';

const TodoList = () => {


  const [todos, setTodos] = useState([
    { id: 1, text: "item 1", completed: false },
    { id: 2, text: "item 2", completed: true },
  ]);


  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>to do list</h1>
      <input
        type="text"
        placeholder="to do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.text}
            <button onClick={(e) => {e.stopPropagation();deleteTodo(todo.id);}}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
