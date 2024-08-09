import React from 'react'

const Card = (props) =>
{
    return <div> 
    <img src={props.image} alt = "article image"/>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    </div>
}

export default Card;

