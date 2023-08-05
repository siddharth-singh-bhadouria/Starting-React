import TodoItem from './todoItem'
import Button from './Button'
import AddTask from './AddTask';

export const Todos = ({ todos, onDelete, onToggle }) => {

    const onClick = (e) => {
        console.log('Click')
    }

    //Add Task ==>
    const addTask = (todo) => {
        console.log(todo)
        console.log('todo')
    }

    return (
        <div className='container'>
            <h3 className='text-center my-3 header'>Todos List
                <Button color='green' text='Add' onClick={onClick} /></h3>
            <AddTask onAdd={addTask} />
            {todos.length > 0 ?
                todos.map(todo => {
                    return (<TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />)
                })
                : 'No tasks to show'}

        </div>
    )
}

