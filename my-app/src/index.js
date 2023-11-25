import './index.css'
import ReactDOM from 'react-dom/client';
const tag = <strong>Hello React WORLD!</strong>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {tag}
  </div>
);

