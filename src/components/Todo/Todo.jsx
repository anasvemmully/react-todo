import React, { useEffect, useState } from 'react';
import ToDoCreate from '../ToDoCreate/ToDoCreate';
import TodoElement from '../TodoElement/TodoElement';
import "./Todo.css"

function Todo() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const todosAdd = () => {
        if (todo.length > 0) {
            setTodos([
                ...todos,
                {
                    "task": todo,
                    "isdone": false
                }
            ])
            setTodo("")
        }
        // TODO
        // need to implelement required pop up
    }

    const todosDelete = (index) => {
        let temp = [
            ...todos.slice(0, index),
            ...todos.slice(index + 1),
        ]
        setTodos(temp)
    }

    return (
        <div className='todo-container'>
            <div className='todo'>
                <div className='todo-head'>
                    <h1>✎ fun to-do</h1>
                </div>
                <div>
                    <ToDoCreate todo={todo} setTodo={setTodo} todosAdd={todosAdd} />
                </div>
            </div>
            <div className='todolist'>
                {
                    todos.length > 0 ? todos.map((element, index) => {

                        return <TodoElement key={index} index={index} element={element} todosDelete={todosDelete}/>

                    }) : <div className='nothing'>
                            <span>Try</span> 
                            <span>Creating Some task</span>
                        </div>
                }
            </div>
        </div>
    )
}

export default Todo