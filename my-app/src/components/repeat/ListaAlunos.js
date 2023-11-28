import Alunos from "../../data/Alunos";

const ListaAlunos = () => {
    const alunoLI = Alunos.map(aluno => {
        return (
            <li key = {aluno.id}>
                {aluno.id} - {aluno.nome} - {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul>
                {alunoLI}
            </ul>
        </div>
    )

}

export default ListaAlunos;