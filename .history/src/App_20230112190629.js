import { useState } from 'react';
import './App.css';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        <Media min={0} max={10}></Media>
        <Soma min={0} max={10}></Soma>
        <Sorteio min={0} max={10}></Sorteio>
      </div>
    </div>
  );
}

export default App;
