import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';


function App() {

  function onAdd() {
      alert(`Agregado al carrito`)
  }
  
  return (
    <>
      
      <NavBar />

      <h1 className="display-2" style={{ textAlign: 'center' }}>
        MovRoller shop
      </h1>
      <br />

      <ItemListContainer greeting = {"Estamos trabajando para ofrecerte las mejores ofertas en patines :)"}/>
      
      <ItemCount initial={1} quantity={10} onAdd={onAdd} />

      <Item />
      
    </>
  );
}

export default App;
