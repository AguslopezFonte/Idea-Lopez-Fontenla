import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Body from './components/Body';
import Item from './components/Item';
import Contador from './components/Contador';
import Container from './components/Container/Container';

function App() {
  return (

    <div>
      {/*<Contador stock={5}/>*/}
      <Navbar/>
    <Routes>
    <Route path ="/" element={<Container/>}></Route>
      <Route path ="/home" element={<Home/>}></Route>
      <Route path= "/products" element ={<Products />}></Route>
    </Routes>
      <Body/> 
    </div>
  );
}

export default App;
