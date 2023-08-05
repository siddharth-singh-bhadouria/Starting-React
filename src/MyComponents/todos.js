import TodoItem from './todoItem'
import Button from './Button'

export const Todos = (props) => {

    const onClick = (e) => {
        console.log('Click')
    }


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

