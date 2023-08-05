export default function TodoItem({ todo, onDelete }) {
    return (
        <div className="todo">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    )
}

