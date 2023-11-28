let RandomNumber = (props) => {
    return (
        < div >
            <h2>
                Number: {Math.ceil(Math.random() * (props.max - props.min) + props.min)}
            </h2>
        </div >
    )
}

export default RandomNumber;
