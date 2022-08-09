import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { data } from "../../data/data";
import Itemlist from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState();
  const { id } = useParams();
  //se crea instancia de base de datos de firebase
  const db = getFirestore();
  //accedo a mi coleccion de firebase
  const itemsCollection = collection(db, "instrumentos");

  useEffect(() => {
    if (id) {
      const queryFiltrado = query(
        itemsCollection,
        where("categoria", "==", id)
      );
      getDocs(queryFiltrado)
        .then((data) => {
          setProducts(
            data.docs.map((documento) => ({
              id: documento.id,
              ...documento.data(),
            }))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //El metodo getDocs me trae los productos de una coleccion
      getDocs(itemsCollection)
        .then((data) => {
          setProducts(
            data.docs.map((documento) => ({
              id: documento.id,
              ...documento.data(),
            }))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

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

/* useEffect(() => {
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
}); */
