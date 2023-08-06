import { useState } from 'react'
import React from 'react'

const AddTask = ({ onAdd }) => {

    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            alert('Please add a task')
            return
        }

        onAdd({ title, desc, reminder })

        setTitle('')
        setDesc('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="todo">Todo : </label>
                <input type="text" placeholder='Add todo' id='todo' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="desc">Description(Date & Time) : </label>
                <input type="text" placeholder='Add description' id='desc' value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set reminder : </label>
                <input type="checkbox" checked={reminder} id='reminder' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <button className="btn btn-block">Save</button>
        </form>
    )
}

export default AddTask
