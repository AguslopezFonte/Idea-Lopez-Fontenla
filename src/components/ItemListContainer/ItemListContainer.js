import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { data } from "../../data/data"

function ItemListContainer() {

  const[products, setProducts] = useState ()


  useEffect(()=>{
    getProductsPromise.then((result) => setProducts(result))

  

  
  }, [])

  const getProductsPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(data)
    }, 4000)
  })

  return (
     <section className='cuerpo'>
       <div>
       <h2> Catalogo de Productos</h2>
       <p> Elegi tus productos de esta lista</p>
       </div>
       
      
     </section>

  );
}

export default ItemListContainer;