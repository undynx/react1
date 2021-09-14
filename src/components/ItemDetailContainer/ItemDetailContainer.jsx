import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { tarea } from '../ItemListContainer/ItemListContainer.jsx';

function ItemDetailContainer() {

    const [elem, setElem] = useState([])

    useEffect(() => {
        tarea
        .then(resolve => setElem(resolve))

    }, [])

    return (
        <div id="detail-container">
            <ItemDetail key={elem.id} elem={elem} />
        </div>
    )

}

export default ItemDetailContainer;