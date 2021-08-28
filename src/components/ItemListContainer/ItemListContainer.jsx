function ItemListContainer({greeting = "Estamos trabajando para ofrecerte las mejores ofertas en patines :)"}) {
    return (
        <p style={{ textAlign: 'center', color: 'gray' }} > {greeting} </p>
    )
}

export default ItemListContainer;