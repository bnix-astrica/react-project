
import React from 'react';
import "./App.css";
import FilmsList from "./components/filmsList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ list: [...this.state.list, this.state.text], text: "" });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

export default App;