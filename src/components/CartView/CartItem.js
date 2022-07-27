import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../Context/CartContext";

function CartItem({ product }) {
  const { removeFromCart } = useContext(CartContext); // Extraemos del contexto lo que vamos a utulizar en este component
  return (
    <div className="card">
      <strong>{product.item.nombre}</strong>
      <span>Precio: {product.item.precio}</span>
      <span>Cantidad: {product.quantity}</span>
      <button onClick={() => removeFromCart(product.item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
