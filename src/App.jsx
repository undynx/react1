import { BrowserRouter, Switch, Route, Link  } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemCount from './components/ItemCount/ItemCount';


function App() {

  function onAdd() {
    alert(`Agregado al carrito`)
  }
  
  return (
    <BrowserRouter>
      <div>
        
        <NavBar />

        <h1 className="display-2" style={{ textAlign: 'center' }}>
              MovRoller shop
        </h1>

        <Switch>
          
          <Route exact path='/'>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h3>Bienvenidx a tienda Movida Roller</h3>
            <p>Clickeá el botón para ir a nuestro catálogo de items</p>
            <Link to='/items'>
              <button>Items</button>
            </Link>
            </div>
          </Route>

          <Route exact path='/items'>
            <ItemListContainer greeting={"Estamos trabajando para ofrecerte las mejores ofertas en patines :)"} />
            {/*<ItemCount initial={1} quantity={10} onAdd={onAdd} />*/}
          </Route>

          <Route exact path='/items/:category'>
            <ItemListContainer greeting={"Estamos trabajando para ofrecerte las mejores ofertas en patines :)"} />
          </Route>

          <Route exact path='/detalle'>
            <ItemDetailContainer />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}


export default App;
