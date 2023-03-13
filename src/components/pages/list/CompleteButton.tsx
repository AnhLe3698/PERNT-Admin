import React from 'react';
import axios, { AxiosResponse } from 'axios';

interface CompleteButtonProps {
  name: string;
  onComplete: (arr: []) => void;
}

function CompleteButton(props: CompleteButtonProps) {
  const url = process.env.REACT_APP_LOCAL;
  const handleComplete = async () => {
    try {
      const response: AxiosResponse = await axios.put(`${url}/api/todo/complete`, { name: props.name });
      console.log(response.data);
      props.onComplete(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleComplete} className="completion-button">Done</button>
  );
}

export default CompleteButton;
