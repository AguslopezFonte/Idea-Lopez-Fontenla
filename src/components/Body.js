
import { Children } from 'react';
import './Body.css';
import Card from './Card';

function Body({}) {
  return (
     <section className='cuerpo'>
       <h2> Catalogo de Productos</h2>
       <p> Elegi tus productos de esta lista</p>
         <Card product='Mesa' price= '$1000' img=''/>
         <Card product='Silla' price= '$200'/>
         <Card product='' price= ''/>
         <Card product='' price= ''/>
     </section>

  );
}

export default Body;
