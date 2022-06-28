
import { useEffect, useState } from 'react';
import './ItemList.css';

function ItemList() {
  const [productos, setProductos ] = useState([]);

  useEffect( () => (
      setTimeout(
          () => {
              fetch('constantes/productos.json')
              .then(resp => resp.json())
              .then(data = > setProductos(data))
          }, 3000
      )
        }, [] );