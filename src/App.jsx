import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <h1 className="display-2" style={{ textAlign: 'center' }}>
        MovRoller shop
      </h1>
      <br />

      <ItemListContainer />
      
      <ItemCount />
    </>
  );
}

export default App;
