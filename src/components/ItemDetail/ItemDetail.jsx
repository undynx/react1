import './ItemDetail.css'

function ItemDetail({ elem }) {

    return (
        
        <div id="detail-card" className="card">
            
            <h4>{elem.name}</h4>
           
            <h5>Detalles del artículo </h5>
            <p>{elem.descripcion}</p>
            <p>Ruedas de {elem.ruedas}</p>
            <h5>{elem.precio}</h5>

        </div>

    )

}

export default ItemDetail;