import './index.css'
import ReactDOM from 'react-dom/client';
import React from 'react';

// Components
import Primerio from './components/basic/Primeiro';
import ComParametro from './components/basic/ComParametro';
import Fragment from './components/basic/Fragment';
import App from './components/basic/App';
import RandomNumber from './components/basic/RandomNumber';
import Familia from './components/basic/Familia';
import FamiliaMembro from './components/basic/FamiliaMembro';
import ListaAlunos from './components/repeat/ListaAlunos';

const tag = <strong>Hello React WORLD!</strong>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Familia apelido='Silva'>
      <FamiliaMembro nome='Maria' />
      <FamiliaMembro nome='Manuel' />
      <FamiliaMembro nome='Marco' />
    </Familia>
    <ListaAlunos/>
  </div>
);

