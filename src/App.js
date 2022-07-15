import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path ="/" element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
