import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Body from './components/Body';
import Welcome from './components/Welcome';

function App() {
  return (

    <div>
      <Navbar/>
      <Welcome name ="Agustin"/>
      <Body/>
    </div>
  );
}

export default App;
