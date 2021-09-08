import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

function ItemDetailContainer({products}) {

    const [elem, setElem] = useState([])

    let promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve({products})
        }, 2000)
    })

    useEffect(() => {
        promesa.then(resolve => setElem(resolve))
    }, [])

    return (
        <div id="detail-container">
            <ItemDetail key={elem.id} elem={elem} />
        </div>
    )

}

export default ItemDetailContainer;