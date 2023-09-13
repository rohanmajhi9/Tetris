//import logo from './logo.svg';
import './App.css';
import Game from "../src/components/Game";

function App() {
  return (
    <>
    <div className='App'>
      <Game rows={20} columns={10}/>
      <h1>Hello Gamers</h1>

    </div>
    </>
  );
}

export default App;
