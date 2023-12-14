import {useParams} from 'react-router-dom';
const Country = ()=>{
    const {pais} = useParams()
    return (
        <div>
            <h1>Country: {pais}</h1>
        </div>
    )
}

export default Country;