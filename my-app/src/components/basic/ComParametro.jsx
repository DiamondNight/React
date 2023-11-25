import React from "react";

export default function ComParametro(props) {
    console.log(props);
    const status = props.nota > 10 ? 'Aprobado' : 'Reprobado';
    // props.nota = Math.ceil(props.nota) [No se puede modificar el valor del props]
    let notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                Aluno - {props.aluno} - {notaInt} - {status}
            </p>
        </div>
    )
}