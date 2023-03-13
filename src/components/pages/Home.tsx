import React, {useState} from 'react';
import ToDoList from './list/ToDoList';

function Home() {
  return (
    <div className="home">
      <ToDoList></ToDoList>
    </div>
  );
}

export default Home;