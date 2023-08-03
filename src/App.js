import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header';
import { Footer } from './MyComponents/footer';
import { Todos } from './MyComponents/todos';

function App() {
  return (
    <>
      <Header />
      <Todos />
      <Footer />
    </>

  );
}

export default App;
