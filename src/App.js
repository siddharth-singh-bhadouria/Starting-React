import { useState } from 'react'
import Header from './MyComponents/header';
import { Footer } from './MyComponents/footer';
import { Todos } from './MyComponents/todos';
// i named the original files starting with small letters so they get red underline on using capital 1st letter and i don't want to see that thats why i will keep the original 4 files named with small letters only.


function App() {
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
    <>
      <Header title='My Todo List' searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>

  );
}

export default App;
