import React, { useContext, useEffect, useState } from "react"; //Plantilla para documento de react (comando rfce)
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import CartList from "./CartList";

function CartViewContainer() {
  const { cart, removeFromCart } = useContext(CartContext); // Extraemos del contexto lo que vamos a utulizar en este componente.
  // const [isEmpty]
  console.log(cart);
  return (
    <div>
      {cart.length ? (
        <CartList />
      ) : (
        <div className="emptycart-container">
          {" "}
          <h2>El carrito esta vacio</h2>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartViewContainer;
