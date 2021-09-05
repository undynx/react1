function Item({items}) {
    
    return(
    
        <div className="card">
            
            <img src={items.foto} />
            <p>{items.name}</p>

        </div>
    )

}

export default Item;