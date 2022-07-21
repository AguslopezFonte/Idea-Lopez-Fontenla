import React from "react";
import Item from "../Item/Item";

function Itemlist({ products }) {
  console.log(products);
  return (
    <div>
      {products.map((element) => {
        return <Item product={element} />;
      })}
    </div>
  );
}

export default Itemlist;
