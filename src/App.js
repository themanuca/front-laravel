import './App.css';
import Tabela from './components/table/index.jsx'
import { Button } from 'react-bootstrap';

function App() {

  function hunderClick(){
    window.location.href ='/registro';
  }

  return (
    <div className="App">
      <Tabela/>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;
