
import { useEffect, useState } from 'react';
import './Card.css';

useEffect(()=>{
    setTimeout(()=> {
        fetch("data.json")
        .then((resp)=>resp.json())
        .then((data)=>dataSet(data))
    
    }, 2000);
}, [])

export default Card; 