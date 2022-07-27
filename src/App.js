import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/Context/CartContext";
import CartViewContainer from "./components/CartView/CartViewContainer";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          {/* // En app.js definimos las rutas, y que componente vamos a mostrar en cada ruta. */}
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartViewContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
