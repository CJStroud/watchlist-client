import React, { Component } from 'react';
import FilmResult from './components/FilmResult'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      films: []
    }
  }

  handleRequestFilms = () => {
    const search = this.state.value
    fetch(`http://www.omdbapi.com/?apikey=969d4d25&s=${search}`)
      .then(response => response.json())
      .then(data => this.setState({ films: data.Search }))
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render () {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Search for a film</h1>
        <p>We are using the <a href='http://www.omdbapi.com'>Open Move Database Api</a> to power the search</p>

        <input type='text' onChange={this.handleChange} value={this.state.value} />
        <button onClick={this.handleRequestFilms}>Search</button>

        {this.state.films.map(film => <FilmResult film={film} />)}
      </div>
    );
  }
}

export default App;
