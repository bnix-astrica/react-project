import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function SingleFilmPage() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  function getFilm() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => {
        console.error("Failed to load film:", error);
      });
  }

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <section className="single-film-page">
      <div className="film-header">
        <h1>{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
      </div>

      <div className="film-details">
        <p>
          The film was released in <strong>{item.release_date}</strong> and garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a href="https://www.rottentomatoes.com/" target="_blank" rel="noreferrer">
            Rotten Tomatoes
          </a>
          .
        </p>
      </div>

      <div className="film-description">
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </section>
  );
}
