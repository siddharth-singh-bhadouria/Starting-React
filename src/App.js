import { useState } from 'react'
import Header from './MyComponents/header';
import { Footer } from './MyComponents/footer';
import { Todos } from './MyComponents/todos';
// i named the original files starting with small letters so they get red underline on using capital 1st letter and i don't want to see that thats why i will keep the original 4 files named with small letters only.


function App() {
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


  // Deleting Task ==>
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Set Reminder ==>
  const toggleReminder = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, reminder: !todo.reminder } : todo))
  }

  return (
    <>
      <Header title='My Todo List' searchBar={false} />
      <Todos todos={todos} onDelete={deleteTask} onToggle={toggleReminder} />
      <Footer />
    </>

  );
}

export default App;
