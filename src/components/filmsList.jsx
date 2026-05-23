import React, { Component } from 'react';

export default class FilmsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  getFilms() {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then(response => response.json())
      .then(data => this.setState({ list: data }))
      .catch(error => console.error('Error fetching films:', error));
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <ul>
        {this.state.list.map(film => (
          <li key={film.id}>
            <h3>{film.title}</h3>
            <p>Release Date: {film.release_date}</p>
            <p>{film.description}</p>
          </li>
        ))}
      </ul>
    );
  }
}
