import React, { useState, useEffect } from 'react';

export default function FilmsList(props) {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.error('Error fetching films:', error));
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <ul>
      {list.map(film => (
        <li key={film.id}>
          <h3>{film.title}</h3>
          <p>Release Date: {film.release_date}</p>
          <p>{film.description}</p>
        </li>
      ))}
    </ul>
  );
}
