import React from 'react'
import Card from './Card'
import './CardsList.css'
import NewCard from './NewCard'

const CardsList = ({cards, column}) => {
  return (
    <div className="CardsList">
      {cards.map((card, i) => <Card card={card} key={i}/>)}
      <NewCard columnId={column}/>
    </div>
  )
}

export default CardsList
