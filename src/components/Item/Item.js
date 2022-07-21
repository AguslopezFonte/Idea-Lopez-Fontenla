import React from "react";
import { NavLink } from "react-router-dom";

function Item({ product }) {
  return (
    <NavLink to={`/item/${product.id}`}>
      <div>
        <strong>{product.nombre}</strong>
      </div>
    </NavLink>
  );
}

export default Item;
