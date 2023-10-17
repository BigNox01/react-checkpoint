
import Cards from './components/cards';
import './App.css';
import Navbarcomp from './components/Navbar';

function App() {
  return (
    <>
    <div className="App">
    <Navbarcomp/>
    <div className='Row'>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
    </div>
    </>
  );
}

export default App;
