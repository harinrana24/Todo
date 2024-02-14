import React from 'react';

/// pass props to it todo i.e the item we are goona add and and remove button i.e that will delete your item
function TodoItem({ todo, onDelete }) {
  
  function clicked (){
      onDelete(todo.id)
    }

  return (
    <div  className="todo-item">
       
        {todo.text}
      <button onClick={clicked}> Delete </button>
     
    </div>
  );
}

export default TodoItem;
