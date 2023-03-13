import React, { useState, FormEvent } from 'react';
import axios from 'axios';

interface TodoFormProps {
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}

function TodoForm(props: TodoFormProps) {
  const [todo, setTodo] = useState('');
  const url = process.env.REACT_APP_LOCAL;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${url}/api/todo`, { task: todo });
      console.log(response.data);
      setTodo('');
      props.setList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <label>
        New Topic:
        <input type="text" value={todo} onChange={handleChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;

