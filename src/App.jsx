import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <h1 className="display-2" style={{ textAlign: 'center' }}>
        MovRoller shop
      </h1>
      <br />
      <ItemListContainer />
    </>
  );
}

export default App;
