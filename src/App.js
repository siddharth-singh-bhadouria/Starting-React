import './App.css';
import Header from './MyComponents/header';
import { Footer } from './MyComponents/footer';
import { Todos } from './MyComponents/todos';

function App() {
  let todos = [
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
  ];
  return (
    <>
      <Header title='My Todo List' searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>

  );
}

export default App;
