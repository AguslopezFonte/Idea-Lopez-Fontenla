import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
  return (
    <div>
      <h4>{props.product.nombre}</h4>
      <p>{props.product.descripcion}</p>
      <ItemCount />
    </div>
  );
}

export default ItemDetail;
