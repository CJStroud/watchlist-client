import React, { Component } from 'react';
import FilmResult from './components/FilmResult'
import ResultCount from './components/ResultCount'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      films: []
    }
  }

  handleRequestFilms = () => {
    const { search } = this.state
    if (!search) {
      this.setState({ noEmptySearchError: true })
      return
    }
    fetch(`http://www.omdbapi.com/?apikey=969d4d25&s=${search}`)
      .then(response => response.json())
      .then(data => this.setState({ films: data.Search }))
  }

  handleClearForm = () => {
    this.setState({
      search: '',
      films: []
    })
  }

  handleChange = (event) => {
    this.setState({ noEmptySearchError: false })
    this.setState({ search: event.target.value })
  }

  handleHintClick = (event) => {
    event.preventDefault()
    const search = 'Planet of the apes'
    this.setState({ search, noEmptySearchError: false }, this.handleRequestFilms)
  }

  render () {
    return (
      <div className="App">
        <h1>Search for a film</h1>
        <p>We are using the <a href='http://www.omdbapi.com'>Open Move Database Api</a> to power the search</p>

        <input type='text' onChange={this.handleChange} value={this.state.search} />
        <button onClick={this.handleRequestFilms}>Search</button>
        <button onClick={this.handleClearForm}>Clear</button>


        {this.state.noEmptySearchError && <p style={{color: 'red'}}>Enter a value to search</p>}

        {<ResultCount count={this.state.films.length} search={this.state.search} />}
        {this.state.films.map(film => <FilmResult film={film} />)}
      </div>
    );
  }
}

export default App;
