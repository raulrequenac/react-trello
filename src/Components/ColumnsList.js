import React from 'react'
import {listColumns} from '../services/TrelloApp'
import Column from './Column'
import NewColumn from './NewColumn'
import './ColumnsList.css'

class ColumnList extends React.Component {
  state = {
    columns: []
  }
  
  componentDidMount() {
    listColumns().then(columns => {
      this.setState({columns})})
  }
  
  render() {
    return (
      <div className="ColumnsList">
        {this.state.columns.map((column, i) => <Column column={column} key={i}/>)}
        <NewColumn />
      </div>
    )
  }
}

export default ColumnList
