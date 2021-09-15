import { Link } from 'react-router-dom';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount.jsx';

function Item({ items }) {
    
    return(
    
        <span className="card"> 
            <img src={items.foto} />
            <p>{items.name}</p>
            <Link to='/detalle'>
                <button>Detalle</button>
            </Link>

            <ItemCount items={items}/>

        </span>
    )

}

export default Item;