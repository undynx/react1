import { Link } from 'react-router-dom';
import './Item.css'

function Item({ items }) {
    
    return(
    
        <span className="card"> 
            <img src={items.foto} />
            <p>{items.name}</p>
            <Link to='/detalle'>
                <button>Detalle</button>
            </Link>
        </span>
    )

}

export default Item;