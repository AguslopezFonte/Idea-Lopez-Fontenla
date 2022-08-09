import React from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  return (
    <NavLink to={`/item/${product.id}`}>
      <div className="card">
        <h2>{product.nombre}</h2>
        <img src={product.img}></img>
      </div>
    </NavLink>
  );
}

export default Item;
