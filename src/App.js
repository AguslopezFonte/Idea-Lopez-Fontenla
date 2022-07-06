import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Body from './components/Body';
import Item from './components/Item';
import Contador from './components/Contador';

function App() {
  return (

    <div>
      {/*<Contador stock={5}/>*/}
      <Navbar/>
      <Body/> 
    </div>
  );
}

export default App;
