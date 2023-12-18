import DataContext from "../data/DataContext";
import React, { useContext, useState, useEffect } from "react";
import usersData from "../data/UserData";

const Card = () => {

    const { state } = useContext(DataContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(usersData.find((element) => { return element.id === state.userId }));
    }, [state.userId])
    if (user) {
        return (
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`./img/${user.photo}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">{user.email}</p>
                            <p className="card-text"><small className="text-body-secondary">{user.name}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card;