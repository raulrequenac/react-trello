import React from 'react'
import Label from './Label'
import './Card.css'

const Card = ({card}) => {
  return (
    <div className="Card card">
      <div className="labels">
        {card.labels.map((label, i) => <Label label={label} key={i}/>)}
      </div>
      <div className="cardTitle">
        <h1>{card.title}</h1>
      </div>
      <div className="cardDescription">
        <p>{card.description}</p>
      </div>
    </div>
  )
}

export default Card
