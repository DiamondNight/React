import React from "react";

// Components
import Primerio from "./Primeiro";
import ComParametro from "./ComParametro";
import Fragment from "./Fragment";

let App = () => {
    return (
    <div>
        <Primerio />
        <ComParametro titulo="Classificações [React]" aluno="Luis Alves" nota={16.8} />
        <ComParametro titulo="Classificações [React]" aluno="Tiago" nota={6.8} />
        <Fragment />
    </div>
    )
} 
export default App;
