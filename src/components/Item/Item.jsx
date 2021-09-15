import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

function Item({ items }) {

    let [count, setCount] = useState(0)

    const quantity = items.stock

        
    function onAdd() {
        alert(`Agregado al carrito`)
    }

    function handlerOnAdd() {
        onAdd()
        setCount(0)
    }

    function agregarItem() {
        if (count < quantity) {
            setCount(count+1)
        }
    }

    function quitarItem() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    
    return(
    
        <span className="card"> 
            <img src={items.foto} />
            <p>{items.name}</p>
            <Link to='/detalle'>
                <button>Detalle</button>
            </Link>

            <div>
                <button className="botonCarrito" onClick={quitarItem}> - </button>
                <p id="contador" className="botonCarrito"> {count} </p>
                <button className="botonCarrito" onClick={agregarItem}> + </button>
            </div>

            <button id="agregarCart" onClick={handlerOnAdd}>Agregar</button>
        </span>
    )

}

export default Item;