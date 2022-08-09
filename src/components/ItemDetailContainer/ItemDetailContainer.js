import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../../data/data";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Firestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const db = getFirestore();
  const referenciaProductos = doc(db, "instrumentos", id); // Referencia a mi coleccion de productos para decirle a firebase de donde sacar el prod

  useEffect(() => {
    getDoc(referenciaProductos)
      .then((data) => {
        setProduct({ id: data.id, ...data.data() });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="cuerpo">
      <div>{product && <ItemDetail product={product} />}</div>
    </section>
  );
}

export default ItemDetailContainer;

/* useEffect(() => {
  getProductPromise.then((result) => setProduct(result));
}, [id, product]);

const getProductPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let productoFiltrado = data.find((element) => element.id == id);
    resolve(productoFiltrado);
  }, 4000);
});
 */
