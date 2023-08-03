import './App.css';
import Header from './MyComponents/header';
import { Footer } from './MyComponents/footer';
import { Todos } from './MyComponents/todos';

function App() {
  return (
    <>
      <Header title='My Todo List' searchBar={false} />
      <Todos />
      <Footer />
    </>

  );
}

export default App;
