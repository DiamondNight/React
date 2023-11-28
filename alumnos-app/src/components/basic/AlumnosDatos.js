import React from "react";

export default function ComParametro(props) {
    const status = props.nota >= 10 ? 'Aprobado' : 'Reprobado';
    let notaInt = Math.ceil(props.nota)
    return (
        <div>
            <p>
                Aluno - {props.aluno} - {notaInt} - {status}
            </p>
        </div>
    )
}