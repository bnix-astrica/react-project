
import React, { useState } from 'react';
import "./App.css";
import FilmsList from "./components/filmsList";


function App(props) {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  }

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <FilmsList />
    </div>
  );
}

export default App;