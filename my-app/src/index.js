import './index.css'
import ReactDOM from 'react-dom/client';
import Primerio from './components/basic/Primeiro';
const tag = <strong>Hello React WORLD!</strong>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {tag}
    <br></br>
    <Primerio />
  </div>
);

