import React from 'react'
import CardsList from './CardsList'
import './Column.css'

const Column = ({column}) => {
  return (
    <div className="Column card">
      <h1><b>{column.title}</b></h1>
      <div className="column-content">
        <CardsList cards={column.cards} column={column}/>
      </div>
    </div>
  )
}

export default Column
