function Item({items}) {
    
    return(
    
        <div className="card">
            
            <img src={items.foto} />
            <p>{items.name}</p>
            <p>Ruedas de {items.ruedas}</p>

        </div>
    )

}

export default Item;

//<img src={item.foto} />