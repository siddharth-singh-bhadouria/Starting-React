import TodoItem from './todoItem'
import Button from './Button'
import { useState } from 'react'

export const Todos = (props) => {

    const onClick = (e) => {
        console.log('Click')
    }

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Go to the market',
            desc: 'You need to go to the market to get this job done!'
        },
        {
            id: 2,
            title: 'Go to the mall',
            desc: 'You need to go to the mall to get this job done!'
        },
        {
            id: 3,
            title: 'Go to the shop',
            desc: 'You need to go to the shop to get this job done!'
        }
    ])

    return (
        <div className='container'>
            <h3 className='text-center my-3 header'>Todos List
                <Button color='green' text='Add' onClick={onClick} /></h3>

            {props.todos.map(todo => {
                return (<TodoItem key={todo.id} todo={todo} />)
            })}
        </div>
    )
}

