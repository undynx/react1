import ItemList from '../ItemList/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// imágenes //
import twister from '../../assets/twisteredge.jpg';
import twistertrinity from '../../assets/twistertrinity.jpg';
import fr1 from '../../assets/fr1.jpg';
import eagle from '../../assets/flying.jpg';
import psvelocidad from '../../assets/ps-trinity-velocidad.jpg'
import powerbladeelite from '../../assets/powerblade-elite.jpg'
import agressive from '../../assets/flying-agressive.jpg';


let articulos = [
  { id: 1, name: "Rollerblade Twister Edge", descripcion: "Patines de bota rígida, muy resistentes y con rulemanes de excelente calidad", ruedas: "85A 80mm", precio: "USD 350", categoria: "freeskate", foto: twister },
  { id: 2, name: "Rollerblade T.Edge Trinity", descripcion: "Patines de bota rígida, ideales para velocidad", ruedas: "85A 110mm", precio: "USD 400", categoria: "freeskate", foto: twistertrinity },
  { id: 3, name: "Seba FR1", descripcion: "Patines de bota rígida, muy cómodos y resistentes", ruedas: "85A 80mm", precio: "USD 350", categoria: "freeskate", foto: fr1},
  { id: 4, name: "Flying Eagle F4 Raven", descripcion: "Bota rígida, rulemanes flying eagle", ruedas: "85A 80mm", precio: "USD 270", categoria: "freeskate", foto: eagle },
  { id: 5, name: "Powerslide R4 Trinity", descripcion: "Bota rígida, patines de velocidad", ruedas: "88A 110mm", precio: "USD 330", categoria: "velocidad", foto: psvelocidad },
  { id: 6, name: "Powerblade Elite 125", descripcion: "Patines de velocidad, bota termomoldeable", ruedas: "85A 125mm", precio: "USD 330", categoria: "velocidad", foto: powerbladeelite },
  { id: 7, name: "Flying Eagle Enkidu Aggressive", descripcion: "Patines de agressive, bota rígida", ruedas: "88A 110mm", precio: "USD 280", categoria: "agressive", foto: agressive }

]

export const tarea = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve(articulos)
    reject('error')
  }, 3000);

});


function ItemListContainer({ greeting }) {
  
  const [items, setItems] = useState([])
  const { category } = useParams()


  useEffect(() => {

    if(category===undefined){
      tarea.then(resolve => setItems(resolve))
      .catch(err => err)     //guardar en el estado
    }else{
      tarea
      .then((resolve)=> setItems(resolve.filter( r => category===r.categoria)) ) 
    }
  }, [category])

  return (

    <>
      
      <p style={{ textAlign: 'center', color: 'gray' }} > {greeting} </p>
      <ItemList products={items} />

    </>

  )
}

export default ItemListContainer;
