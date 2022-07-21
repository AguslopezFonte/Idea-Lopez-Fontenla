import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { data } from "../../data/data";
import Itemlist from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";

import { getFireStore, doc, getDoc } from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProductsPromise.then((result) => setProducts(result));
  }, [id, products]);

  const getProductsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        let productosFiltrados = data.filter(
          (element) => element.categoria == id
        );
        resolve(productosFiltrados);
      }
      resolve(data);
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
      <div>
        <h2> Catalogo de Productos</h2>
        <p> Elegi tus productos de esta lista</p>
        {products && <Itemlist products={products} />}
      </div>
    </section>
  );
}

export default ItemListContainer;
