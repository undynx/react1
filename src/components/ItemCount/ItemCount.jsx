import React, {useState} from 'react';
import patin from '../../assets/twister-edge-e3.jpg'
import './ItemCount.css';

function ItemCount() {
    
    let [stock, setStock] = useState(1);
    function agregarItem() {
        if (stock <= 10) {
            setStock(stock+1)
        }
    }

    function quitarItem() {
        if (stock > 0) {
            setStock(stock-1)
        }
    }

    
    return (
        <div id="cardContainer">
            <div className="card">
                <img src={patin} alt="patines rollerblade" />
                <p>Patines Rollerblade Twister Edge e3</p>

               <div>
                    <button className="botonCarrito" onClick={quitarItem}>-</button>
                    <p id="contador" className="botonCarrito">{stock}</p>
                    <button className="botonCarrito" onClick={agregarItem}>+</button>
                </div>

                <button id="agregarCart">Agregar</button>
            </div>
        </div>
    )
}



export default ItemCount;