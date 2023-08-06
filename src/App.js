import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './MyComponents/Navbar';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/todos';
import AddTask from './MyComponents/AddTask';
import About from './MyComponents/About';

// i named the original files starting with small letters so they get red underline on using capital 1st letter and i don't want to see that thats why i will keep the original 4 files named with small letters only.


function App() {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Doctors Appointment',
      desc: 'Aug 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      title: 'Meeting a colleague',
      desc: 'Aug 6th at 4:30pm',
      reminder: true
    },
    {
      id: 3,
      title: 'Go to the market',
      desc: 'Aug 6th at 7:00pm',
      reminder: false
    }
  ])


  //Add Task ==>
  const addTask = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTodo = { id, ...todo }
    setTodos([...todos, newTodo]);
  }



  // Deleting Task ==>
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Set Reminder ==>
  const toggleReminder = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, reminder: !todo.reminder } : todo))
  }

  return (
    <Router>
      <Navbar title='My Todo List' searchBar={false} />
      <div className='container'>
        <Header onAdd={() => { setShowAddTodo(!showAddTodo) }} showAdd={showAddTodo} />

        <Routes>
          <Route path='/' exact Component={(props) => (
            <>
              {showAddTodo && <AddTask onAdd={addTask} />}
              {
                todos.length > 0 ?
                  (<Todos todos={todos} onToggle={toggleReminder} onDelete={deleteTask} />) : ('No tasks to show')
              }
            </>
          )} />
          <Route path='/about' Component={About} />
        </Routes>
        <p className='text-center my-5 mb-auto'>< Footer /></p>
      </div>
    </Router>
  )
}

export default App;

