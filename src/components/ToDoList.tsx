import React, {useState, useEffect} from 'react';
import "./ToDoList.css";
import axios from 'axios';
import TodoForm from './ToDoForm';

function ToDoList() {
  const [list, setList] = useState([
    {
      name: 'Add Item',
      id: '123456',
      completion: true
    },
    {
      name: 'Add Item',
      id: '1234567',
      completion: false
    }
  ]);

  const url = process.env.REACT_APP_LOCAL;
  console.log(url, '-----');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/api/todo`);

        console.log(response.data);
        setList(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="to-do-list">
      <h3 >
        Concepts and Topics List
      </h3>
      <TodoForm setList={setList} ></TodoForm>
      <div className="to-do-list-containers" >

        <div className='list-container'>
          <h5>
            Incomplete
          </h5>
          <ul className='column-one-incomplete' id='vertical'>
            {list.filter(item => item.completion === false).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul> 
        </div>
        
        <div className='list-container'>
          <h5>
            Completed
          </h5>
          <ul className='column-two-complete' id='vertical'>
            {list.filter(item => item.completion === true).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>  
        </div>
        
      </div>
    </div>
  );
}

export default ToDoList;