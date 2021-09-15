import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css';
import Alert from 'react-bootstrap/Alert';

function ItemCount({items}) {

    let [count, setCount] = useState(0)
    const [boton, setBoton] = useState(true)

    const quantity = items.stock

    function handlerOnAdd() {
        alert("Agregado al carrito")
        setCount(0)
        setBoton(false)
    }

    function agregarItem() {
        if (count < quantity) {
            setCount(count + 1)
        }
    }

    function quitarItem() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div>
                <button className="botonCarrito" onClick={quitarItem}> - </button>
                <p id="contador" className="botonCarrito"> {count} </p>
                <button className="botonCarrito" onClick={agregarItem}> + </button>
            </div>
            { boton ?
                <button id="agregarCart" onClick={handlerOnAdd}>Agregar</button>
                :
                <Link to='/cart'>
                    <button id="agregarCart">Ir al Carrito</button>
                </Link>
            }
        </div>
    )
}

export default ItemCount;