import { useState } from 'react'
import TodoItem from './todoItem'
import Button from './Button'
import AddTask from './AddTask';

export const Todos = ({ todos: initialTodos, onDelete, onToggle }) => {

    const [todos, setTodos] = useState(initialTodos)

    const onClick = (e) => {
        console.log('Click')
    }

    //Add Task ==>
    const addTask = (todo) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTodo = { id, ...todo }
        setTodos([...todos, newTodo])
    }

    return (
        <div className='container'>
            <h3 className='text-center my-3 header'>Todos List
                <Button color='green' text='Add' onClick={onClick} /></h3>
            <AddTask onAdd={addTask} />
            {initialTodos.length > 0 ?
                initialTodos.map(todo => {
                    return (<TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />)
                })
                : 'No tasks to show'}

        </div>
    )
}

