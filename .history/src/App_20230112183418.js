import { useState } from 'react';
import './App.css';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        <Media minimo={min} maximo={max}></Media>
        <Soma minimo={min} maximo={max}></Soma>
        <Sorteio minimo={min} maximo={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
