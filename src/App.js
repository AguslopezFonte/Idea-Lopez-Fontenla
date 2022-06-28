import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Body from './components/Body';
import Welcome from './components/Welcome';
import Contador from './components/Contador';

function App() {
  return (

    <div>
      <Contador/>
      <Navbar/>
      <Welcome name ="Agustin"/>
      <Body>
        <Card/>
      </Body>
    </div>
  );
}

export default App;
