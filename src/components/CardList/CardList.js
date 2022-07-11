import './CardList.css'
import Card from '../Card/Card'

function CardList(props){
    return(
        <div className='cards-list'>
            {props.cards.map((card)=>(
                <Card
                name={card.name}
                id={card.id}
                />

            ))}
        </div>
    )
}
export default CardList;