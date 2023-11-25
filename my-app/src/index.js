import './index.css'
import ReactDOM from 'react-dom/client';

// Components
import Primerio from './components/basic/Primeiro';
import ComParametro from './components/basic/ComParametro';
import Fragment from './components/basic/Fragment';
import App from './components/basic/App';

const tag = <strong>Hello React WORLD!</strong>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {tag}
    <br></br>
    <Primerio />
    <ComParametro titulo="Classificações [React]" aluno="Luis Alves" nota={16.8} />
    <ComParametro titulo="Classificações [React]" aluno="Tiago" nota={6.8} />
    <Fragment />
    <App />
  </div>
);

