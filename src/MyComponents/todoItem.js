export default function TodoItem({ todo, onDelete, onToggle }) {
    return (
        <div className={`todo ${todo.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(todo.id)} >
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo.id)} >Delete</button>
        </div>
    )
}

