import { useRef } from 'react';

const Input = (props) => {
    const numberRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        props.verificar(numberRef.current.value);
        console.log(numberRef.current.value);
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="number">Number: </label>
                <input id="number" type="number" min={0} max={100} ref={numberRef} />
            </div>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Input;