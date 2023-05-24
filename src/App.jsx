import './App.css';
import Search from './components/Search';
import Country from './components/Country';


// import PokeCard from './components/PokeCard';

function App() {
  return (
    <div className='App' role='main'>
      <div className='search-bar'>
        <Search />
      </div>
    </div>
  );
}

export default App;
