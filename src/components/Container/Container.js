import { useState } from "react";
import CardList from '../CardList/CardList'
import './Container.css'

function Container (){
    const [cardsFetch, setCardsFetch] = useState([])

    const fetchCards = () => {
        fetch('')
        .then((response) => response.json())
        .then((data=> ) setCardsFetch(data))
    }

    return{
        <div className = "container">
        <button onClick= (fetchCards)> Ver productos</button>
        <CardList cards={cardsFetch}/>
        </div>
    }
}

export default Container;