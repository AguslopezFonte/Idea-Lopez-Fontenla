import React, { useState, useContext } from "react"; // Importamos el hook (funcion) useContext de react que nos permite utilizar el contexto.
import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function ItemDetail(props) {
  const [compraTerminada, setCompraTerminada] = useState(false); //Agregamos un estado para hacer
  const { addToCart } = useContext(CartContext); // Extraemos lo que queremos usar del context con Destructuring

  const addToCartHandler = (num) => {
    // Funcion que se dispara al agregar al carrito
    setCompraTerminada(true); // Cambia el estado para desaparecer el contador
    addToCart(props.product, num); // Dispara la funcion para agregar un item al carrito con su cantidad
  };

  return (
    <div>
      <h2>{props.product.nombre}</h2>
      <p>{props.product.descripcion}</p>
      <h3>${props.product.precio}</h3>
      <img src={props.product.img}></img>
      {compraTerminada ? (
        <NavLink to="/cart">
          <button> Ir al carrito </button>
        </NavLink>
      ) : (
        <ItemCount
          stock={props.product.stock}
          addToCartHandler={addToCartHandler}
        />
      )}
    </div>
  );
}

export default ItemDetail;
