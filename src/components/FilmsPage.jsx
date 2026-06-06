import React, { useState, useEffect } from 'react';
import { filterFilmsByDirector, getListOf } from '../helpers/filmHelpers';

function FilmsPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((error) => console.error('Error fetching films:', error));
  }, []);

  const directors = getListOf(list, "director");
  const filmsByDirector = filterFilmsByDirector(list, searchDirector);

  console.log('FilmsPage directors', directors, 'list length', list.length, 'searchDirector', searchDirector);

  return (
    <div>
      <h2>Films Page</h2>
      <form>
        <div className="formGroup">
          <label htmlFor="director-select">Director</label>
          <select
            id="director-select"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All Directors</option>
            {directors.map((director) => (
              <option key={director} value={director}>
                {director}
              </option>
            ))}
          </select>
        </div>
      </form>
      <ul>
        {filmsByDirector.map((film) => (
          <li key={film.id}>
            <h3>{film.title}</h3>
            <p>Release Date: {film.release_date}</p>
            <p>{film.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;
