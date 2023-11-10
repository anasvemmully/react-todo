import React, { useEffect, useRef, useState } from 'react'
import './TodoElement.css'

function TodoElement({ index, element, todosDelete }) {

    const [t, setT] = useState(element.task);
    const [editMode, seteditMode] = useState(false);

    const inputRef = useRef(null);

    const toggleEditMode = () => seteditMode(!editMode);

    const todoEdit = () => {
        toggleEditMode()
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    const todoCancel = () => {
        toggleEditMode()
        inputRef.current.disabled = true
        setT(element.task)
    }

    const todoDone = () => {}

    console.log("incomponenet")

    return (
        <div className='todo-element'>
            <span>{index}</span>
            <input ref={inputRef} type="text" value={t} disabled onChange={(e) => setT(e.target.value)
            } />
            {editMode === false ?
                <>
                    <div>
                        <button onClick={todoEdit} className='todo-element-update'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => todosDelete(index)} className='todo-element-delete'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </>
                :
                <>
                    <div>
                        <button onClick={() => todoDone()} className='todo-element-done'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                        </button>
                    </div>
                    <div>
                        <button onClick={() => todoCancel()} className='todo-element-cancel'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </>
            }
        </div>
    )
}

export default TodoElement