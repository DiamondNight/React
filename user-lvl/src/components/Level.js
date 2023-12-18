import React, { useContext, useEffect, useState } from "react";

import DataContext from "../data/DataContext";

const Level = (props) => {
    const { state } = useContext(DataContext);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (state.userLevel >= props.level) {
            setShow(true);
        }   else {
            setShow(false);
        }
    }, [state.userLevel, props.level])

    if (show) {
        return (
            <div>
                Component Level: {props.level}
            </div>
        )
    }
}

export default Level;