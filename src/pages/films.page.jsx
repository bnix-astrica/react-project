import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { filterFilmsByDirector, getFilmStats, getListOf } from '../helpers/filmHelpers';

export default function FilmsPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((error) => console.error('Error fetching films:', error));
  }, []);

  const directors = getListOf(list, 'director');
  const filmsByDirector = filterFilmsByDirector(list, searchDirector);
  const { avg_score, total, latest } = getFilmStats(filmsByDirector);

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
      <section className="film-stats">
        <div>
          <h3>Of Films</h3>
          <p>{total}</p>
        </div>
        <div>
          <h3>Average Rating</h3>
          <p>{avg_score.toFixed(2)}</p>
        </div>
        <div>
          <h3>Latest Film</h3>
          <p>{latest}</p>
        </div>
      </section>
      <ul>
        {filmsByDirector.map((film) => (
          <li key={film.id}>
            <h3>
              <Link to={`film/${film.id}`}>{film.title}</Link>
            </h3>
            <p>Release Date: {film.release_date}</p>
            <p>{film.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
