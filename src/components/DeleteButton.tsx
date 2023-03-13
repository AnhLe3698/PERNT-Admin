import React from 'react';
import axios, { AxiosResponse } from 'axios';

interface DeleteButtonProps {
  name: string;
  onDelete: (arr: []) => void;
}

function DeleteButton(props: DeleteButtonProps) {
  const url = process.env.REACT_APP_LOCAL;
  const handleDelete = async () => {
    try {
      const response: AxiosResponse = await axios.delete(`${url}/api/todo/${props.name}`);
      console.log(response.data);
      props.onDelete(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleDelete} className="completion-button">Delete</button>
  );
}

export default DeleteButton;
