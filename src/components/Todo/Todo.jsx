import React, { useEffect, useState } from 'react';
import ToDoCreate from '../ToDoCreate/ToDoCreate';
import TodoElement from '../TodoElement/TodoElement';
import "./Todo.css"

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


function Todo() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const { width, height } = useWindowSize()
    const [isVisible, setisVisible] = useState(false);


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

    const todosDone = (index, tt) => {
        setTodos(todos.map((ele, idx) => {
            if (idx === index) return {
                "task": tt,
                "isdone": false
            }
            else return ele
        }))

    }

    const todosDelete = (index) => {
        let temp = [
            ...todos.slice(0, index),
            ...todos.slice(index + 1),
        ]
        setTodos(temp)
    }

    const taskDone = (index) => {
        console.log("task done")
        setTodos(todos.map((ele, idx) => {
            if (idx === index) {
                ele.isdone = true
                console.log(ele)
                return ele
            } else return ele
        }))
    }

    const letCelebrate = () => {
        setisVisible(true)
        setTimeout(() => {
            setisVisible(false);
        }, 1200);
    }

    return (
        <>
            {isVisible === true ?
                <Confetti
                    recycle={false}
                    tweenDuration={1200}
                    numberOfPieces={100}
                    width={width}
                    height={height}
                />
                :
                <></>
            }
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
                        todos.length > 0 ? todos.sort((a, b) => a.isdone - b.isdone).map((element, index) => {

                            return <TodoElement letCelebrate={letCelebrate} key={index} index={index} element={element} todosDelete={todosDelete} todosDone={todosDone} taskDone={taskDone} />

                        }) : <div className='nothing'>
                            <span>Try</span>
                            <span>Creating Some task</span>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Todo