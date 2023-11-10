import React from 'react'
import './ToDoCreate.css'


function ToDoCreate({ todo, setTodo, todosAdd }) {

    return (
        <div className='todocreate'>
            <input className="todoinput" type="text" value={todo} placeholder='I need to practice code at hackerrank...' onChange={(e)=>setTodo(e.target.value)}/>
            <button className='totdobutton' onClick={todosAdd}>+</button>
        </div>
    )
}

export default ToDoCreate