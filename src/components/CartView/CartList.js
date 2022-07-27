import React, { useContext, useEffect, useState } from "react"; //Plantilla para documento de react (comando rfce)
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem";

function CartList() {
  const { cart, removeFromCart } = useContext(CartContext); // Extraemos del contexto lo que vamos a utulizar en este componente.
  console.log(cart);
  return (
    <div>
      {cart.map((element) => (
        <CartItem product={element} />
      ))}
    </div>
  );
}

export default CartList;
