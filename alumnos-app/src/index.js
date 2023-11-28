import ReactDOM from 'react-dom/client';
import React from 'react';


// MODULOS PERSONALES
import RandomNumber from './components/basic/RandomNumber';
import ComParametro from './components/basic/AlumnosDatos';

// RENDER
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <div>
        <React.Fragment>
            <ComParametro aluno = {'Luis'} nota = {10}/>
            <RandomNumber min={10} max={20} />
        </React.Fragment>

    </div>
)



