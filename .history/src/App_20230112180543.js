import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';
import Media from './components/Media';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        <Media></Media>
      </div>
    </div>
  );
}

export default App;
