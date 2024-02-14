import React, { useState } from 'react';
import TodoItem from './TodoItem753';

// using usestate() FUNCTION
function TodoList() {
  const [todoItem, setToDoItem] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // THIS function will add and update the setToDoItem  
  function addTodo (index) {
    const newTodo = { id: index, text: inputValue };
    setToDoItem([...todoItem, newTodo]);
    setInputValue('');
  };

  // to remove the function 
  function deleteTodo (id) {
    setToDoItem(todoItem.filter(todo => todo.id !== id));
  };

  // function when wer write in input and that event will be stored
  function change (e){
    setInputValue(e.target.value)
  }
  return (
    <div className="todo-list" >
      <div className='item' >
      <input type="text" value={inputValue} onChange={change} />
      <button className="add-button" onClick={addTodo}>Add</button>
      </div>
      <div>
      
      {/* filter function to fetch to do item */}
        {todoItem.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
