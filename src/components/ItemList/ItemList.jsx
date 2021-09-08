import { Link } from 'react';
import Item from '../Item/Item.jsx';

function ItemList({products}) {

    return (
      
     <div id="cardContainer">
          {products.map(items => <Item key={items.id} items={items} />)}
     </div>

  )
}


export default ItemList;