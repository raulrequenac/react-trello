import React from 'react'
import './NewCard.css'

class NewCard extends React.Component {
  state = {
    clicked: false,
    title: 'Insert title',
    description: 'Insert description'
  }

  onClickNewCard = () => {
    this.setState({
      clicked: true
    })
  }

  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  onChangeDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  onClickCancel = () => {
    this.setState({
      clicked: false
    })
  }

  render() {
    return (
      <div className="NewCard" onClick={this.onClickNewCard} >
        <small className="add" style={{display: `${this.state.clicked ? 'none' : ''}`}}>+ Add another card</small>
        <form style={{display: `${this.state.clicked ? '' : 'none'}`}}>
          <div className="title form-group">
            <label className="d-flex">
              <small className="">Title:</small>
              <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} />
            </label>
          </div>
          <div className="description form-group">
            <label className="d-flex">
              <small className="">Description:</small>
              <textarea type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
            </label>
          </div>
          <div className="tags form-group">
            <label className="d-flex">
              <small>Tags:</small>
              <select>
                
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-primary mb-2">Add Card</button>
          <button className="btn btn-danger mb-2" onClick={this.onClickCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default NewCard
