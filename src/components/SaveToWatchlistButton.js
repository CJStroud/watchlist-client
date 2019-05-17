import React, { Component } from 'react'

export default class SaveToWatchlistButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSaving: false
    }
  }

  handleClick = () => {
    if (this.state.isSaving) return
    this.setState({ isSaving: true })
    setTimeout(() => this.setState({ isSaving: false }), 2000)
  }

  render () {
    const text = this.state.isSaving ?
       'Saving...' : 'Save to watchlist'

    return (
      <button onClick={this.handleClick}>{text}</button>
    )
  }
}
