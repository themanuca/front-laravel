import './App.css';
import Tabela from './components/table/index.jsx'
import { Button } from 'react-bootstrap';

function App() {

  
  return (
    <div className="App">
      <Tabela/>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;
