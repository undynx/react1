import ItemList from '../ItemList/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx'
import { useState, useEffect } from 'react'

import twister from '../../assets/twisteredge.jpg';
import twistertrinity from '../../assets/twistertrinity.jpg';
import fr1 from '../../assets/fr1.jpg';
import eagle from '../../assets/flying.jpg';


let articulos = [
  { id: 1, name: "Rollerblade Twister Edge", descripcion: "Patines de bota rígida, muy resistentes y con rulemanes de excelente calidad", ruedas: "85A 80mm", precio: "USD 350", foto: twister },
  { id: 2, name: "Rollerblade T.Edge Trinity", descripcion: "Patines de bota rígida, ideales para velocidad", ruedas: "85A 110mm", precio: "USD 400", foto: twistertrinity },
  { id: 3, name: "Seba FR1", descripcion: "Patines de bota rígida, muy cómodos y resistentes", ruedas: "85A 80mm", precio: "USD 350", foto: fr1},
  { id: 4, name: "Flying Eagle F4 Raven", descripcion: "Bota rígida, rulemanes flying eagle", ruedas: "85A 80mm", precio: "USD 270", foto: eagle },
]


function ItemListContainer({ greeting }) {
  
  const [items, setItems] = useState([])

  let tarea = new Promise((resolve, reject) => {

    setTimeout(() => {
    resolve(articulos)
    reject('error')
    }, 3000);

  })

  useEffect(() => {

    tarea.then(resolve => setItems(resolve))
    .catch(err => err)

    }, [])

  return (

    <>
      
      <p style={{ textAlign: 'center', color: 'gray' }} > {greeting} </p>
      <ItemList products={items} />
      <ItemDetailContainer products={items} />

    </>

  )
}

export default ItemListContainer;
