
import './Card.css';

function Card({product, price, img}) {
  return (
      <div className='card'>
          <h4>{props.product}</h4>
          <p>{props.price}</p>
          <img src={img} />
      </div>
  

  );
}

export default Card;