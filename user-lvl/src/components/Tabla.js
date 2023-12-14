import usersData from "../data/UserData";
import React, { useContext } from "react";
import DataContext from "../data/DataContext";


let dataUsuarios = usersData;
const Tabla = () => {

    const { state, setState } = useContext(DataContext)

    let columnas;
    const selectUser = (id, level) => {
        setState({ ...state, userid: id, userLevel: level });
        console.log(state);
    }
    columnas = dataUsuarios.map((element) => {
        return (
            <li key={element.id} style={{ cursor: "pointer" }} className="list-group-item d-flex justify-content-between align-items-start" onClick={e => selectUser(element.id, element.level)}>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{element.name}</div>
                </div>
                <span className="badge bg-primary rounded-pill">
                    {element.level}
                </span>
            </li>
        )
    });

    return (
        <div>
            <ul className="list-group">
                {columnas}
            </ul>
        </div>
    );
}

export default Tabla;