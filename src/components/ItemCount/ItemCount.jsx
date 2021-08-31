import {useState} from 'react';
import patin from '../../assets/twister-edge-e3.jpg'
import './ItemCount.css';

function ItemCount({ initial, quantity, onAdd }) {
    
    let [count, setCount] = useState(initial)

    function agregarItem() {
        if (count < quantity) {
            setCount(count+1)
        }
    }

    function quitarItem() {
        if (count > initial) {
            setCount(count-1)
        }
    }

    function handlerOnAdd() {
        onAdd()
        setCount(0)
    }

    
    return (

        <div id="cardContainer">
            <div className="card">
                <img src={patin} alt="patines rollerblade" />
                <p>Patines Rollerblade Twister Edge e3</p>

               <div>
                    <button className="botonCarrito" onClick={quitarItem}> - </button>
                    <p id="contador" className="botonCarrito"> {count} </p>
                    <button className="botonCarrito" onClick={agregarItem}> + </button>
                </div>

                <button id="agregarCart" onClick={handlerOnAdd}>Agregar</button>
            </div>
        </div>
    )
}



export default ItemCount;