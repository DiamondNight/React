import './index.css'
import ReactDOM from 'react-dom/client';

// Components
import Primerio from './components/basic/Primeiro';
import ComParametro from './components/basic/ComParametro';

const tag = <strong>Hello React WORLD!</strong>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {tag}
    <br></br>
    <Primerio />
    <ComParametro titulo = "Classificações [React]" aluno = "Luis Alves" nota = {16.8} />
  </div>
);

