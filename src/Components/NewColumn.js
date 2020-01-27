import React from 'react'
import './NewColumn.css'

class NewColumn extends React.Component {
  state = {
    clicked: false,
    title: 'Insert title',
  }

  onClickNewColumn = () => {
    this.setState({
      clicked: true
    })
  }

  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  render() {
    return (
      <div className="NewColumn card" onClick={this.onClickNewColumn} >
        <small className="add" style={{display: `${this.state.clicked ? 'none' : ''}`}}>+ Add another column</small>
        <form className="card" style={{display: `${this.state.clicked ? '' : 'none'}`}}>
          <div className="title form-group">
            <label>
              <small>Title:</small>
              <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} />
            </label>
          </div>
          <button></button>
          <button></button>
        </form>
      </div>
    )
  }
}

export default NewColumn
