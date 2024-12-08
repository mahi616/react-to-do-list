import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState([]);

    const addTodo = () =>{
        let input = document.getElementById('input');
        const p = document.getElementById('Err');
        if (input.value === "") {
            p.setAttribute('style','display:block');
            p.style.color='red';
        }else{
            setTodos([...todos,newTodo])
            setNewTodo('');
        }
    }
    const removeErr = () =>{
        const p = document.getElementById('Err');
        p.style.display='none';
    }
    const deleteTask = (index) =>{
        const NewTodos = [...todos];
        NewTodos.splice(index,1);
        setTodos(NewTodos)
    }
    return (
        <div>
            <h1>To-Do List</h1>
            <input type='text' id='input' placeholder='Enter Your Content' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} onKeyDown={removeErr} required/>
            <p id='Err' style={{display:'none'}}>Please Enter Some Content First</p>
            <button onClick={addTodo} id='submit'>Submit</button>

            <ul>
                {
                    todos.map((option,index)=>(
                        <li key={index} id='li'>
                            {option}
                            <button className='delete' onClick={()=>deleteTask(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;
