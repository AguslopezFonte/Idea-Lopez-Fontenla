import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../../data/data";

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProductPromise.then((result) => setProduct(result));
  }, [id, product]);

  const getProductPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let productoFiltrado = data.find((element) => element.id == id);
      resolve(productoFiltrado);
    }, 4000);
  });

  /*   useEffect(()=>{
    const db = getFireStore();

    const movieRef = doc(db, "instrumentos musicales", "
    jZEwwnB5Gs6N3MniZaq0")

    getDoc(movieRef).then((snapshot) =>{
      if(snapshot.exists()){
        setMovieFetch({...snapshot.data()})
      }
    })
  }, [])
 */

  return (
    <section className="cuerpo">
      <div>{product && <ItemDetail product={product} />}</div>
    </section>
  );
}

export default ItemDetailContainer;
