import TodoItem from './todoItem'

export const Todos = ({ todos, onDelete, onToggle }) => {

    // const onClick = (e) => {
    //     console.log('Click')
    // }


    return (
        <div>
            {todos.map(todo => {
                return (<TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />)
            })
            }
        </div>
    )
}

