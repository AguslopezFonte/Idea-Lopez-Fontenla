import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Body from './components/Body';
import Card from './components/Card';
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
