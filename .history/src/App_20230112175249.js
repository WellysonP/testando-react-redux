import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
      <Card title="Card 01" red>X</Card>
      </div>
      <div className='linha'>
      <Card title="Card 02" blue>X</Card>
      <Card title="Card 03" green>Y</Card>
      <Card title="Card 04" purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
