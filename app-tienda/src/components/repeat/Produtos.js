import productosLista from "../../Data/ListaProdutos"
const ListadoDeProductos = ()=>{
    let productos = productosLista.map(el => {
        return (
            <li key = {el.id}>
                Ref = {el.ref} - Descricion = {el.description} - Precio {el.price} - Categoria = {el.category}
            </li>
        )
    })
    return (
        <div>
            <ul>
                {productos}
            </ul>
        </div>
    )
}

export default ListadoDeProductos;