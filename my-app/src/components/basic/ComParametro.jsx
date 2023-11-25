import React from "react";

export default function ComParametro(props) {
    console.log(props);
    const status = props.nota > 10 ? 'Aprobado' : 'Reprobado';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                Aluno - {props.aluno} - {props.nota} - {status}
            </p>
        </div>
    )
}