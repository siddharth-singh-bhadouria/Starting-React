export default function TodoItem(props) {
    return (
        <div className="todo">
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}

