import React, {useState} from 'react';

interface MyComponentProps {
  list: object;
  onComplete: () => void;
}
function ToDoList({ onComplete, list }: MyComponentProps) {
  return (
    <div className="ToDoList">
      <header >
        Home
      </header>
    </div>
  );
}

export default ToDoList;