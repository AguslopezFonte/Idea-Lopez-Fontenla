import React, { useContext, useEffect, useState } from "react"; //Plantilla para documento de react (comando rfce)
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import CartList from "./CartList";
import Order from "../Order/Order";

function CartViewContainer() {
  const { cart, removeFromCart, getTotal, clearCart } = useContext(CartContext); // Extraemos del contexto lo que vamos a utulizar en este componente.
  const [confirmarCompra, setConfirmarCompra] = useState(false);
  // const [isEmpty]
  console.log(cart);
  return (
    <div>
      {cart.length ? (
        <>
          <CartList />
          Total de la compra: <strong>{getTotal()}</strong>
          <hr></hr>
          <button onClick={() => setConfirmarCompra(true)}>
            Terminar mi compra
          </button>
        </>
      ) : (
        <div className="emptycart-container">
          {" "}
          <h2>El carrito esta vacio</h2>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      )}
      {confirmarCompra && (
        <Order
          order={cart}
          getTotal={getTotal}
          clearCart={clearCart}
          setConfirmarCompra={setConfirmarCompra}
        />
      )}
    </div>
  );
}

export default CartViewContainer;
