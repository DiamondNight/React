import Dica from "./Dica";
import Input from "./input";
import { useState } from "react";

const randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

const Guess = () => {
    const [dica, setDica] = useState('Indique um nùmero del 1 al 100');

    const checkNumber = (palpite) => {
        console.log(randomNumber);
        if (randomNumber == palpite) {
            setDica('Parabèns')
        } else {
            randomNumber > palpite ? setDica('El numero secreto esta mas arriba.') : setDica('El numero secreto esta mas abajo.')
        }
    }
    return (
        <>
            <Input verificar={checkNumber} />
            <Dica mensagem={dica} />
        </>
    )
}

export default Guess;