import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'

import twister from '../../assets/twisteredge.jpg';
import twistertrinity from '../../assets/twistertrinity.jpg';
import fr1 from '../../assets/fr1.jpg';
import eagle from '../../assets/flying.jpg';


let articulos = [
  { id: 1, name: "Rollerblade Twister Edge", ruedas: "85A 80mm", foto: twister },
  { id: 2, name: "Rollerblade Twister Edge Trinity", ruedas: "85A 110mm", foto: twistertrinity },
  { id: 3, name: "Seba FR1", ruedas: "85A 80mm", foto: fr1},
  { id: 4, name: "Flying Eagle F4 Raven", ruedas: "85A 80mm", foto: eagle },
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
    </>

  )
}

export default ItemListContainer;
